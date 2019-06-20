-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2019 a las 20:28:47
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `library`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `books`
--

CREATE TABLE `books` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publishDate` datetime NOT NULL,
  `urlImage` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `books`
--

INSERT INTO `books` (`id`, `name`, `author`, `publishDate`, `urlImage`, `state`, `created_at`, `updated_at`, `category_id`) VALUES
(6, 'Narraciones extraordinarias P', 'Edgar allan poe', '2019-05-29 00:00:00', 'http://localhost/Library/storage/app/public/6zqMKOGoBUkysAK0bFOugmhN0YiKuSslQubLwZ1I.jpeg', 0, '2019-06-20 23:06:30', '2019-06-20 23:17:38', 2),
(7, 'Dracula', 'Bram stroker', '2019-06-30 00:00:00', 'http://localhost/Library/storage/app/public/OvpLTHjZBaupmv7KLFbgaOoG2dEcUCa2l3JLa9vJ.jpeg', 1, '2019-06-20 23:07:23', '2019-06-20 23:16:20', 3),
(8, 'Harry Potter', 'Bram stroker', '2019-06-13 00:00:00', 'http://localhost/Library/storage/app/public/K4cdlY8xLKo2eMYWhcoladadG4hD1aCNzMk4zTJD.jpeg', 1, '2019-06-20 23:07:41', '2019-06-20 23:22:35', 3),
(9, 'Momo', 'Michael Ende', '2019-06-29 00:00:00', 'http://localhost/Library/storage/app/public/EGk9xHnd3mTMp0QkoUOaKoKC0UeGNQL8vhECNOFq.jpeg', 1, '2019-06-20 23:09:20', '2019-06-20 23:22:23', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `book_library_user`
--

CREATE TABLE `book_library_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `library_user_id` int(10) UNSIGNED NOT NULL,
  `book_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `book_library_user`
--

INSERT INTO `book_library_user` (`id`, `library_user_id`, `book_id`, `created_at`, `updated_at`) VALUES
(8, 4, 7, NULL, NULL),
(9, 3, 9, NULL, NULL),
(10, 3, 8, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(2, 'Dramatic', 'a dramatic category', '2019-06-20 22:51:25', '2019-06-20 22:51:25'),
(3, 'Fantasy', 'fantasy category', '2019-06-20 22:51:39', '2019-06-20 22:51:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `library_users`
--

CREATE TABLE `library_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cellphone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `library_users`
--

INSERT INTO `library_users` (`id`, `name`, `email`, `cellphone`, `created_at`, `updated_at`) VALUES
(1, 'Kevin Del Campo', '15040418@hotmail.com', '6182216437', '2019-06-20 23:10:08', '2019-06-20 23:10:08'),
(2, 'Arturo Rangel', 'arturo78@gmail.com', '67823648732', '2019-06-20 23:11:20', '2019-06-20 23:11:20'),
(3, 'Lucero Rodriguez', 'luecero_as@hotmail.com', '23423432', '2019-06-20 23:14:18', '2019-06-20 23:14:18'),
(4, 'Emilio', 'emi@hotmail.com', '32487324982734', '2019-06-20 23:16:02', '2019-06-20 23:16:02'),
(5, 'Test user', 'test@gamil.com', '892734238947', '2019-06-20 23:16:43', '2019-06-20 23:16:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(19, '2014_10_12_000000_create_users_table', 1),
(20, '2014_10_12_100000_create_password_resets_table', 1),
(21, '2019_06_14_213145_create_categories_table', 1),
(22, '2019_06_14_213200_create_books_table', 1),
(23, '2019_06_14_213216_create_library_users_table', 1),
(24, '2019_06_14_214630_create_book_library_user_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_category_id_foreign` (`category_id`);

--
-- Indices de la tabla `book_library_user`
--
ALTER TABLE `book_library_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_library_user_library_user_id_foreign` (`library_user_id`),
  ADD KEY `book_library_user_book_id_foreign` (`book_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Indices de la tabla `library_users`
--
ALTER TABLE `library_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `library_users_email_unique` (`email`),
  ADD UNIQUE KEY `library_users_cellphone_unique` (`cellphone`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `book_library_user`
--
ALTER TABLE `book_library_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `library_users`
--
ALTER TABLE `library_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `book_library_user`
--
ALTER TABLE `book_library_user`
  ADD CONSTRAINT `book_library_user_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `book_library_user_library_user_id_foreign` FOREIGN KEY (`library_user_id`) REFERENCES `library_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
