-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2023 at 03:51 PM
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
-- Table structure for table `aduilt_details`
--

CREATE TABLE `aduilt_details` (
  `id` int(255) NOT NULL,
  `about_me` varchar(1000) NOT NULL,
  `disclosure` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aduilt_details`
--

INSERT INTO `aduilt_details` (`id`, `about_me`, `disclosure`) VALUES
(1, 'I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.', 'yes'),
(2, 'I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `childs_details`
--

CREATE TABLE `childs_details` (
  `id` int(11) NOT NULL,
  `rank` varchar(500) NOT NULL,
  `term_of_service` varchar(500) NOT NULL,
  `outstanding_merit` text NOT NULL,
  `profile_pic` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `childs_details`
--

INSERT INTO `childs_details` (`id`, `rank`, `term_of_service`, `outstanding_merit`, `profile_pic`) VALUES
(3, 'scout leader', '2y 6m', 'By 1915 Bowen had executed a group of experimental studies that proved to be critically important to petrology and formed the basis of his critical review The Later Stages of the Evolution of the Igneous Rocks (1915), a paper of such outstanding merit that it established Bowen\'s position at the age of 28 as an international figure in petrology.\r\n\r\n', 1);

-- --------------------------------------------------------

--
-- Table structure for table `training`
--

CREATE TABLE `training` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `fk_aduilt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `training`
--

INSERT INTO `training` (`id`, `name`, `fk_aduilt`) VALUES
(1, 'first aid level 3\r\n', 1),
(2, 'group leader\r\n', 1),
(3, 'water safety\r\n', 2),
(4, 'intro to climbing\r\n', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(5000) NOT NULL,
  `last_name` varchar(5000) NOT NULL,
  `status` int(3) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fk_childs_details` int(11) DEFAULT NULL,
  `fk_aduilt_details` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `status`, `password`, `email`, `fk_childs_details`, `fk_aduilt_details`) VALUES
(20, 'aaron', 'mcavoy', 1, 'password', 'guard@email', 3, 1),
(21, 'scout', 'scout', 0, 'password', 'scout@email', 3, NULL),
(22, 'admin', 'admin', 2, 'password', 'admin@email', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aduilt_details`
--
ALTER TABLE `aduilt_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `childs_details`
--
ALTER TABLE `childs_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkaduilt` (`fk_aduilt`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_childs_details` (`fk_childs_details`),
  ADD KEY `fkaduiltsetails` (`fk_aduilt_details`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aduilt_details`
--
ALTER TABLE `aduilt_details`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `childs_details`
--
ALTER TABLE `childs_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `training`
--
ALTER TABLE `training`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `training`
--
ALTER TABLE `training`
  ADD CONSTRAINT `fkaduilt` FOREIGN KEY (`fk_aduilt`) REFERENCES `aduilt_details` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fkaduiltsetails` FOREIGN KEY (`fk_aduilt_details`) REFERENCES `aduilt_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fkchildsdetails` FOREIGN KEY (`fk_childs_details`) REFERENCES `childs_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
