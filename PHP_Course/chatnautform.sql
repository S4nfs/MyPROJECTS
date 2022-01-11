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
-- Database: `chatnautform`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatnautform`
--

CREATE TABLE `chatnautform` (
  `sno` int(4) NOT NULL,
  `name` text NOT NULL,
  `age` int(3) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `email` varchar(22) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `other` text NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chatnautform`
--

INSERT INTO `chatnautform` (`sno`, `name`, `age`, `gender`, `email`, `phone`, `other`, `dt`) VALUES
(1, 'testname', 23, 'male', 'this@gamil.com', '8989878787', 'hello bruh', '2021-04-08 19:16:32'),
(2, 'sagar', 23, 'male', 'sagar2nfs@gmail.com', '8787452563', 'hjello', '2021-04-08 21:10:22'),
(3, 'sagar', 23, 'male', 'sagar2nfs@gmail.com', '8787452563', 'hjello', '2021-04-08 21:18:57'),
(4, 'sagar', 23, 'male', 'sagar2nfs@gmail.com', '8787452563', 'hjello', '2021-04-08 21:20:19'),
(5, 'wakjcbaqc', 100, 'male', 'wacjkb@gmail.com', '8989898989', 'wqcwcwqcwqc', '2021-04-08 21:21:55'),
(6, 'wakjcbaqc', 100, 'male', 'wacjkb@gmail.com', '8989898989', 'wqcwcwqcwqc', '2021-04-08 21:24:22'),
(7, '', 0, '', '', '', '', '2021-04-10 01:54:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatnautform`
--
ALTER TABLE `chatnautform`
  ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatnautform`
--
ALTER TABLE `chatnautform`
  MODIFY `sno` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
