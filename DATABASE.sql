-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2020 at 08:06 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ganesh`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisements`
--

CREATE TABLE `advertisements` (
  `advertisement_id` bigint(20) UNSIGNED NOT NULL,
  `advertisement_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `advertisement_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `advertisement_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `advertisement_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `advertisement_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `Appointment_id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `patient_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Time_and_Date` date DEFAULT NULL,
  `appointment_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`Appointment_id`, `patient_id`, `patient_name`, `reason`, `Time_and_Date`, `appointment_status`, `created_at`, `updated_at`) VALUES
(1, '1', 'Badak', 'AAAJARI', NULL, '1', '2020-12-10 10:57:15', '2020-12-11 05:08:47'),
(2, '1', 'Badak', 'AAAJARI', NULL, '1', '2020-12-10 10:58:40', '2020-12-11 05:08:47'),
(3, '1', 'Badak', 'AAAJARI', NULL, '1', '2020-12-10 10:58:56', '2020-12-11 05:08:46'),
(4, '1', 'Badak', 'AAAJARI', NULL, '1', '2020-12-10 11:00:29', '2020-12-11 05:08:45'),
(5, '1', 'Praneti', 'Cough', '2020-11-12', '1', '2020-12-11 05:06:30', '2020-12-11 05:08:43'),
(6, '1', 'Praneti', 'Cough', '2020-11-12', '1', '2020-12-11 05:06:59', '2020-12-11 05:08:42'),
(7, '1', 'Praneti', 'Cough', '2020-11-12', '1', '2020-12-11 05:07:30', '2020-12-11 05:08:40'),
(8, '1', 'Praneti', 'Cough', '2020-12-11', '4', '2020-12-11 05:09:05', '2020-12-11 05:09:28'),
(9, '1', 'Sourabh', 'kirkir kartay', '2020-12-11', '4', '2020-12-11 07:12:13', '2020-12-11 07:18:55'),
(10, '1', 'Sourabh', 'kirkir kartay', '2020-12-11', '4', '2020-12-11 07:12:19', '2020-12-11 08:39:37'),
(11, '1', 'Sourabh', 'kirkir kartay', '2020-12-11', '1', '2020-12-11 07:13:25', '2020-12-11 07:14:02'),
(12, '1', 'Sourabh', 'kirkir kartay', '2020-12-11', '1', '2020-12-11 07:13:31', '2020-12-11 07:14:02'),
(13, '1', 'Sourabh', 'kirkir kartay', '2020-12-11', '1', '2020-12-11 07:13:47', '2020-12-11 07:14:03'),
(14, '1', 'Charger', 'garam hotay', '2020-12-11', '4', '2020-12-11 07:40:33', '2020-12-11 07:43:30'),
(15, '1', 'ABc', 'xyz', '2020-12-11', '1', '2020-12-11 08:43:47', '2020-12-11 08:50:07');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `banner_id` bigint(20) UNSIGNED NOT NULL,
  `banner_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `banner_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `Doctor_id` bigint(20) UNSIGNED NOT NULL,
  `Doctor_user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Doctor_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Doctor_degree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Doctor_specialization` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Doctor_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Doctor_contact_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Doctor_maximum_number_of_appointments` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Doctor_clinic_time_from` time NOT NULL,
  `Doctor_clinic_time_to` time NOT NULL,
  `Doctor_holiday` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`Doctor_id`, `Doctor_user_id`, `Doctor_name`, `Doctor_degree`, `Doctor_specialization`, `Doctor_address`, `Doctor_contact_number`, `Doctor_maximum_number_of_appointments`, `Doctor_clinic_time_from`, `Doctor_clinic_time_to`, `Doctor_holiday`, `created_at`, `updated_at`) VALUES
(1, '2', 'Dr. ABC', 'MS', 'Surgery', 'Solapur', '8329854669', '10', '07:00:00', '11:00:00', '1', '2020-12-10 03:13:04', '2020-12-10 03:13:04');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2020_11_16_072811_create_permission_tables', 1),
(6, '2020_11_16_082033_create_slots_table', 1),
(7, '2020_11_16_131124_create_appointments_table', 1),
(8, '2020_11_17_185347_create_prescriptions_table', 1),
(9, '2020_11_22_044538_create_doctors_table', 1),
(10, '2020_11_30_125910_create_banners_table', 1),
(11, '2020_11_30_153119_create_advertisements_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('pkore8756@gmail.com', '$2y$10$cjyDEs/NdvXcRwz/1OfbRuatO6RpX5SX8KritfdnNSkf6I7NnrrUu', '2020-12-10 04:09:06');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'role-list', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57'),
(2, 'role-create', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57'),
(3, 'role-edit', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57'),
(4, 'role-delete', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57'),
(5, 'product-list', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57'),
(6, 'product-create', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57'),
(7, 'product-edit', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57'),
(8, 'product-delete', 'web', '2020-12-10 03:12:57', '2020-12-10 03:12:57');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'Redmi K20', 'e6175939bb37b9caee5ae4e6e726d8ba10e3f09eec29bdd1c83c4c5891d844bf', '[\"role:list\"]', NULL, '2020-12-10 10:52:43', '2020-12-10 10:52:43'),
(2, 'App\\Models\\User', 1, 'react-app', 'e3ed36aeab2c1dadfc4c15d22d449466c36efc891c5663d6ebfc315afa098836', '[\"role:list\"]', NULL, '2020-12-11 04:25:16', '2020-12-11 04:25:16'),
(3, 'App\\Models\\User', 1, 'react-app', '9dc9547d0477d189d5293be83c05c53db3f6c121d14325f91c254d8663f1a3a4', '[\"role:list\"]', NULL, '2020-12-11 04:25:16', '2020-12-11 04:25:16'),
(4, 'App\\Models\\User', 1, 'Redmi k20', 'ec31f858269493d2e2e55e1797aadd80e25c9176a6e8664c454804d20433ee1c', '[\"role:list\"]', NULL, '2020-12-11 04:57:51', '2020-12-11 04:57:51'),
(5, 'App\\Models\\User', 1, 'Redmi k20', '95cbf38b7f4fe91160522da95713d753f412cf13dd425ab8776b85338d090a80', '[\"role:list\"]', '2020-12-11 05:09:05', '2020-12-11 04:59:59', '2020-12-11 05:09:05');

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `Prescription_id` bigint(20) UNSIGNED NOT NULL,
  `Appointment_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Medicine_Type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Medicine_name` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Medicine_quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Medicine_time` varchar(999) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`Prescription_id`, `Appointment_id`, `Medicine_Type`, `Medicine_name`, `Medicine_quantity`, `Medicine_time`, `created_at`, `updated_at`) VALUES
(1, '8', '0, 0', 'Medicine 1, Medicine 2', '10, 10', '0,1,1,0,0,1', '2020-12-11 05:09:28', '2020-12-11 05:09:28'),
(2, '8', '0, 0', 'Medicine 1, Medicine 2', '10, 10', '0,1,1,0,0,1', '2020-12-11 05:12:21', '2020-12-11 05:12:21'),
(3, '8', '0, 0', 'Medicine 1, Medicine 2', '10, 10', '0,1,1,0,0,1', '2020-12-11 05:12:37', '2020-12-11 05:12:37'),
(4, '8', '0, 0', 'Medicine 1, Medicine 2', '10, 10', '0,1,1,0,0,1', '2020-12-11 05:12:51', '2020-12-11 05:12:51'),
(5, '9', '0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0', 'Medicine 1, Medicine 2, Medicine 3, Medicine 4, Medicine 5, Medicine   6, Medicine 7, Medicine 8, Medicine 9, Medicine 10, Medicine 11, Medicine 12, Medicine 13, Medicine 14, Medicine 15, Medicine 16, Medicine 17, Medicine 18, Mediicine 19, Medicine 7, Medicine 7, Medicine', '9, 8, 7, 6, 5, 4, 8, 8, 0, 1, 10, 11, 11, 10, 10, 10, 10, 10, 10, 10, 1, 10', '1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0', '2020-12-11 07:18:55', '2020-12-11 07:18:55'),
(6, '14', '1', '1', '1', '1,1,1', '2020-12-11 07:43:30', '2020-12-11 07:43:30'),
(7, '10', '0', 'm1', '2', '1,1,0', '2020-12-11 08:39:37', '2020-12-11 08:39:37');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'web', '2020-12-10 03:13:01', '2020-12-10 03:13:01'),
(2, 'Doctor', 'web', '2020-12-10 03:13:04', '2020-12-10 03:13:04');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(7, 1),
(7, 2),
(8, 1),
(8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `Slot_id` bigint(20) UNSIGNED NOT NULL,
  `Slot_date` date NOT NULL DEFAULT current_timestamp(),
  `Slot_is_available` int(11) NOT NULL DEFAULT 0,
  `Slot_max_appointment_count_change` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`Slot_id`, `Slot_date`, `Slot_is_available`, `Slot_max_appointment_count_change`, `created_at`, `updated_at`) VALUES
(1, '2020-12-12', 0, '12', '2020-12-11 08:37:42', '2020-12-11 08:37:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Hardik Savani', 'pkore8756@gmail.com', NULL, '$2y$10$kS.BENJfFs2sITFhpIM6wuL1fLR4R2JgaNHA4t8U9kGL72Hi.JHiK', NULL, '2020-12-10 03:13:01', '2020-12-10 03:13:01'),
(2, 'Dr. ABC', 'cba@gmail.com', NULL, '$2y$10$8YQKt3bfda0c1uhU5L7LJeg.cahNoLiGrF/abS7Pu7DGtHpBFyqS2', NULL, '2020-12-10 03:13:04', '2020-12-10 03:13:04'),
(4, 'Admin', 'admin@admin.com', NULL, '$2y$10$fXQpcfYKI0Taw6.KBvmojODUhNH7NwkTbJ6nDR29t/bwVWgnSBlki', NULL, '2020-12-10 10:53:13', '2020-12-10 10:53:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`advertisement_id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`Appointment_id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`Doctor_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`Prescription_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `slots`
--
ALTER TABLE `slots`
  ADD PRIMARY KEY (`Slot_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `advertisement_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `Appointment_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `banner_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `Doctor_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `Prescription_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `slots`
--
ALTER TABLE `slots`
  MODIFY `Slot_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
