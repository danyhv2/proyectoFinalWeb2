-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2015 a las 11:25:55
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proyectofinalweb`


DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `mostrar_reportes`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `mostrar_reportes`()
    NO SQL
select u.nombre,u.primerApellido,u.segundoApellido,p.usuario_correo,c.nombre AS carrera from usuarios u, carreras c, carreras_usuarios p
Where c.id_carrera = p.id_carrera  and p. usuario_correo = u.correo$$


DROP PROCEDURE IF EXISTS `usuario_reportes`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usuario_reportes`()
BEGIN 
SELECT nombre, primerApellido,segundoApellido,correo,userRole FROM usuarios WHERE userRole = 'Estudiante';
END$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
