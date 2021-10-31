-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2021 at 06:18 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arclight`
--

-- --------------------------------------------------------

--
-- Table structure for table `arclight_config`
--

CREATE TABLE `arclight_config` (
  `name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `arclight_config`
--

INSERT INTO `arclight_config` (`name`, `value`, `userid`) VALUES
('language', 'english', 1),
('theme_color', 'dark-edition', 1);

-- --------------------------------------------------------

--
-- Table structure for table `arclight_events`
--

CREATE TABLE `arclight_events` (
  `eventid` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `host_uuid` varchar(255) DEFAULT NULL,
  `domain_uuid` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `arclight_events`
--

INSERT INTO `arclight_events` (`eventid`, `description`, `host_uuid`, `domain_uuid`, `userid`, `date`) VALUES
(1, 'guest powered on', '00000000-0000-0000-0000-ac1f6b0a9486', '8f842c9f-2e88-4176-a52a-096df74b8473', 1, '2021-05-29 11:59:07'),
(2, 'guest paused', '00000000-0000-0000-0000-ac1f6b0a9486', '8f842c9f-2e88-4176-a52a-096df74b8473', 1, '2021-05-29 11:59:10'),
(3, 'guest resumed', '00000000-0000-0000-0000-ac1f6b0a9486', '8f842c9f-2e88-4176-a52a-096df74b8473', 1, '2021-05-29 12:00:34');

-- --------------------------------------------------------

--
-- Table structure for table `arclight_users`
--

CREATE TABLE `arclight_users` (
  `userid` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `arclight_users`
--

INSERT INTO `arclight_users` (`userid`, `username`, `email`, `password`) VALUES
(1, 'arclight', NULL, '$2y$10$/H0BRAesCIz0g30aW.HJoO1q4EayyNyGs6BVZiZRal7RGbB/qd7RW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arclight_events`
--
ALTER TABLE `arclight_events`
  ADD PRIMARY KEY (`eventid`);

--
-- Indexes for table `arclight_users`
--
ALTER TABLE `arclight_users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `arclight_events`
--
ALTER TABLE `arclight_events`
  MODIFY `eventid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `arclight_users`
--
ALTER TABLE `arclight_users`
  MODIFY `userid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
