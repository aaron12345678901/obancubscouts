-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 12:11 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `obanscouts`
--

-- --------------------------------------------------------

--
-- Table structure for table `childs_details`
--

CREATE TABLE `childs_details` (
  `id` int(11) NOT NULL,
  `rank` varchar(500) NOT NULL,
  `term_of_service` varchar(500) NOT NULL,
  `outstanding_merit` text NOT NULL,
  `profile_pic` int(1) NOT NULL,
  `badges_acheived` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `childs_details`
--

INSERT INTO `childs_details` (`id`, `rank`, `term_of_service`, `outstanding_merit`, `profile_pic`, `badges_acheived`) VALUES
(3, 'scout leader', '2y 6m', 'By 1915 Bowen had executed a group of experimental studies that proved to be critically important to petrology and formed the basis of his critical review The Later Stages of the Evolution of the Igneous Rocks (1915), a paper of such outstanding merit that it established Bowen\'s position at the age of 28 as an international figure in petrology.\r\n\r\n', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `childs_details`
--
ALTER TABLE `childs_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `childs_details`
--
ALTER TABLE `childs_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
