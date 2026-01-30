import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Включаем статический экспорт для SSG
  output: 'export',
  
  // Отключаем оптимизацию изображений для статического экспорта
  // (альтернативно можно использовать внешний сервис для оптимизации)
  images: {
    unoptimized: true,
  },
  
  // Добавляем trailing slash для совместимости с статическим хостингом
  trailingSlash: true,
};

export default nextConfig;
