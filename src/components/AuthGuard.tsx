import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userIP, setUserIP] = useState<string>("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  // Разрешенные IP адреса (можно расширить)
  const allowedIPs = ["127.0.0.1", "::1", "localhost"];

  // Данные для входа
  const validCredentials = {
    login: "admin",
    password: "secure123",
  };

  useEffect(() => {
    // Получаем IP пользователя
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setUserIP(data.ip);
        setLoading(false);
      })
      .catch(() => {
        setUserIP("unknown");
        setLoading(false);
      });

    // Проверяем сохраненную авторизацию
    const savedAuth = localStorage.getItem("authToken");
    if (savedAuth === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Проверка IP (для локальной разработки разрешаем localhost)
    const isIPAllowed =
      allowedIPs.includes(userIP) ||
      userIP.startsWith("192.168.") ||
      userIP.startsWith("10.") ||
      userIP === "unknown";

    if (!isIPAllowed) {
      setError("Доступ запрещен с вашего IP адреса");
      return;
    }

    // Получаем сохраненных пользователей
    const savedUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]",
    );
    const allUsers = [validCredentials, ...savedUsers];

    // Проверка логина и пароля
    const user = allUsers.find(
      (u) => u.login === login && u.password === password,
    );
    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("authToken", "authenticated");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Валидация
    if (login.length < 3) {
      setError("Логин должен содержать минимум 3 символа");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    // Проверяем, не существует ли уже такой пользователь
    const savedUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]",
    );
    const allUsers = [validCredentials, ...savedUsers];

    if (allUsers.find((u) => u.login === login)) {
      setError("Пользователь с таким логином уже существует");
      return;
    }

    // Сохраняем нового пользователя
    const newUser = { login, password };
    savedUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(savedUsers));

    // Автоматически входим
    setIsAuthenticated(true);
    localStorage.setItem("authToken", "authenticated");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    setLogin("");
    setPassword("");
    setConfirmPassword("");
    setIsRegistering(false);
  };

  const switchMode = () => {
    setIsRegistering(!isRegistering);
    setError("");
    setLogin("");
    setPassword("");
    setConfirmPassword("");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <Icon
            name="Loader2"
            size={32}
            className="animate-spin mx-auto mb-4"
          />
          <p>Проверка доступа...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Icon name={isRegistering ? "UserPlus" : "Shield"} size={24} />
              {isRegistering ? "Регистрация" : "Вход в систему"}
            </CardTitle>
            <CardDescription>
              {isRegistering
                ? "Создайте новый аккаунт для доступа"
                : "Введите логин и пароль для доступа"}
            </CardDescription>
            <div className="text-xs text-gray-500 mt-2">IP: {userIP}</div>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={isRegistering ? handleRegister : handleLogin}
              className="space-y-4"
            >
              <div>
                <Input
                  type="text"
                  placeholder="Логин"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {isRegistering && (
                <div>
                  <Input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <Button type="submit" className="w-full">
                <Icon
                  name={isRegistering ? "UserPlus" : "LogIn"}
                  size={16}
                  className="mr-2"
                />
                {isRegistering ? "Зарегистрироваться" : "Войти"}
              </Button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  {isRegistering
                    ? "Уже есть аккаунт? Войти"
                    : "Нет аккаунта? Зарегистрироваться"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <Button variant="outline" size="sm" onClick={handleLogout}>
          <Icon name="LogOut" size={16} className="mr-2" />
          Выйти
        </Button>
      </div>
      {children}
    </div>
  );
};

export default AuthGuard;
