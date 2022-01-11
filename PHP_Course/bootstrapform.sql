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
-- Database: `bootstrapform`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `sno` int(11) NOT NULL,
  `name` varchar(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `concern` text NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`sno`, `name`, `email`, `concern`, `dt`) VALUES
(1, 'sagar', 'sagar2nfs@gmail.com', 'qsqsqsqsq', '2021-04-17 23:44:20'),
(2, '', '', '', '2021-04-18 00:01:13'),
(3, '', '', '', '2021-04-18 00:01:15'),
(4, '', '', '', '2021-04-18 00:05:00'),
(5, '', '', '', '2021-04-18 00:07:08'),
(6, '', '', '', '2021-04-18 00:07:09'),
(7, '', '', '', '2021-04-18 00:16:57'),
(8, '', '', '', '2021-04-18 13:21:46'),
(9, '', '', '', '2021-04-18 13:23:36'),
(10, '', '', '', '2021-04-18 13:31:53'),
(11, '', '', '', '2021-04-18 13:34:17'),
(12, 'acscacsac', 'acascascasc@gnail.com', 'cqcwqc', '2021-04-18 13:34:30'),
(13, '', '', '', '2021-04-18 14:02:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
