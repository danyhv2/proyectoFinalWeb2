-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 16, 2015 at 08:13 PM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `proyectoFinalWeb`
--

-- --------------------------------------------------------

--
-- Table structure for table `archivos`
--

CREATE TABLE IF NOT EXISTS `archivos` (
`id_archivo` int(11) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `tipo` varchar(50) NOT NULL COMMENT 'Tipo de archivo',
  `fecha_creacion` date NOT NULL,
  `id_proyecto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `area_profesor`
--

CREATE TABLE IF NOT EXISTS `area_profesor` (
`id_area` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `profesor` varchar(100) NOT NULL,
  `id_curso` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `carreras`
--

CREATE TABLE IF NOT EXISTS `carreras` (
`id_carrera` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `dirCarrera` varchar(500) NOT NULL,
  `inactivo` tinyint(1) DEFAULT NULL,
  `codCarrera` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carreras`
--

INSERT INTO `carreras` (`id_carrera`, `nombre`, `dirCarrera`, `inactivo`, `codCarrera`) VALUES
(1, 'Sistemas', 'Marcela', NULL, ''),
(2, 'Diseño', 'Marcela', 0, ''),
(3, 'Mate2', 'Daniela ', 0, 'T234'),
(16, 'TestCarrera', 'Melisa Rosales Rosales', 0, '2332'),
(20, 'Diseño Visual', 'Melisa Rosales Rosales', 0, 'fsdf');

-- --------------------------------------------------------

--
-- Table structure for table `carreras_usuarios`
--

CREATE TABLE IF NOT EXISTS `carreras_usuarios` (
  `id_carrera` int(10) NOT NULL,
  `usuario_correo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

CREATE TABLE IF NOT EXISTS `cursos` (
`id_curso` int(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `prof_encargado` varchar(100) NOT NULL,
  `cuatrimestre` varchar(50) NOT NULL,
  `horario` varchar(50) NOT NULL,
  `rubrica_curso` varchar(50) NOT NULL,
  `inactivo` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id_curso`, `nombre`, `prof_encargado`, `cuatrimestre`, `horario`, `rubrica_curso`, `inactivo`) VALUES
(1, 'Diseno', 'Pablo Castro', 'I cuatrimestre', 'Lunes', 'test', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cursos_carreras`
--

CREATE TABLE IF NOT EXISTS `cursos_carreras` (
  `id_carrera` int(10) NOT NULL,
  `id_curso` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes_por_curso`
--

CREATE TABLE IF NOT EXISTS `estudiantes_por_curso` (
  `id_grupo_curso` int(10) NOT NULL,
  `correo_estudiante` varchar(100) NOT NULL,
  `nombre_grupo` varchar(100) NOT NULL,
  `role_estudiante` varchar(100) NOT NULL,
  `id_rubrica` varchar(50) DEFAULT NULL,
  `nota_final` int(10) DEFAULT NULL,
  `id_rubrica_fact_humano` int(10) DEFAULT NULL,
  `nota_final_fact_humano` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `estudiantes_por_curso`
--

INSERT INTO `estudiantes_por_curso` (`id_grupo_curso`, `correo_estudiante`, `nombre_grupo`, `role_estudiante`, `id_rubrica`, `nota_final`, `id_rubrica_fact_humano`, `nota_final_fact_humano`) VALUES
(12, 'test@gmail.com', 'DMGCoders', 'Coordinador', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `grupos_proyectos`
--

CREATE TABLE IF NOT EXISTS `grupos_proyectos` (
  `id_grupo` int(10) NOT NULL,
  `nombre_grupo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `periodo_votacion`
--

CREATE TABLE IF NOT EXISTS `periodo_votacion` (
`id_periodo` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_cierre` date NOT NULL,
  `id_votacion` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `portafolio`
--

CREATE TABLE IF NOT EXISTS `portafolio` (
`id` int(10) NOT NULL,
  `usuario_correo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `correo_portafolio` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `proyectos`
--

CREATE TABLE IF NOT EXISTS `proyectos` (
`id_proyecto` int(10) NOT NULL,
  `id_grupo` int(10) NOT NULL,
  `calificacion` int(10) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha_ini_subir_arch` date NOT NULL,
  `fecha_cierre_subir_arch` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
`id_role` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL COMMENT 'nombre del role'
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id_role`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Profesor'),
(3, 'Director de Carrera'),
(4, 'Decano'),
(5, 'Estudiante');

-- --------------------------------------------------------

--
-- Table structure for table `rubros`
--

CREATE TABLE IF NOT EXISTS `rubros` (
`id_rubro` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `valor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rubros_por_cursos`
--

CREATE TABLE IF NOT EXISTS `rubros_por_cursos` (
  `id_rubrica` varchar(50) NOT NULL,
  `id_rubro` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tareas`
--

CREATE TABLE IF NOT EXISTS `tareas` (
  `correo_usuario` varchar(100) NOT NULL,
  `fechaEntrega` date NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `hora` time NOT NULL,
  `id_tarea` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `correo` varchar(100) NOT NULL,
  `cedula` int(9) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `primerApellido` varchar(50) NOT NULL,
  `segundoApellido` varchar(50) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `direccion` varchar(500) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `userRole` varchar(50) NOT NULL,
  `foto` int(9) DEFAULT NULL,
  `inactivo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`correo`, `cedula`, `nombre`, `primerApellido`, `segundoApellido`, `contrasena`, `direccion`, `fechaNacimiento`, `userRole`, `foto`, `inactivo`) VALUES
('ffadfdsfadfad@ucenfotec.ac.cr', 234234324, 'Maria Julia', 'HErnandez', 'TEst', 'fafdafdf', 'dsfadsf', '0000-00-00', '0', 234234324, 0),
('mrosales@ucenfotec.ac.cr', 981122546, 'Melisa', 'Rosales', 'Rosales', 'test1234', 'San Jose', '2015-03-02', '3', NULL, NULL),
('test@gmail.com', 123456789, 'Daniela', 'Hernandez', 'Villafuerte', '1234', 'San Jose', '2015-03-02', '1', NULL, NULL),
('testfsdfds@ucenfotec.ac.cr', 434234232, 'Marce', 'Hernanaez', 'fasdfd', '12321321', 'test', '0000-00-00', '3', 434234232, 0),
('testfsdfklk@ucenfotec.ac.cr', 9998877, 'Paco', 'Perex', 'Perez', 'fasdf', 'San Jose', '0000-00-00', '0', 9998877, 0),
('testuser2@gmail.com', 112233445, 'Alonso', 'Fernández', 'Fernández', '1234', 'Heredia', '2015-01-27', '2', NULL, NULL),
('testuser@gmail.com', 987654321, 'Alvaro', 'Quesada', 'Quesada', '1234', 'Heredia', '2014-05-05', '2', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `votacion`
--

CREATE TABLE IF NOT EXISTS `votacion` (
`id_votacion` int(10) NOT NULL,
  `id_proyecto` int(10) NOT NULL,
  `correo_usuario` varchar(100) NOT NULL,
  `promedio` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `archivos`
--
ALTER TABLE `archivos`
 ADD PRIMARY KEY (`id_archivo`), ADD KEY `id_proyecto` (`id_proyecto`);

--
-- Indexes for table `area_profesor`
--
ALTER TABLE `area_profesor`
 ADD PRIMARY KEY (`id_area`), ADD UNIQUE KEY `id_curso` (`id_curso`), ADD KEY `profesor` (`profesor`);

--
-- Indexes for table `carreras`
--
ALTER TABLE `carreras`
 ADD PRIMARY KEY (`id_carrera`);

--
-- Indexes for table `carreras_usuarios`
--
ALTER TABLE `carreras_usuarios`
 ADD PRIMARY KEY (`id_carrera`), ADD UNIQUE KEY `usuario_correo` (`usuario_correo`);

--
-- Indexes for table `cursos`
--
ALTER TABLE `cursos`
 ADD PRIMARY KEY (`id_curso`), ADD KEY `prof_encargado` (`prof_encargado`);

--
-- Indexes for table `cursos_carreras`
--
ALTER TABLE `cursos_carreras`
 ADD PRIMARY KEY (`id_carrera`,`id_curso`), ADD KEY `id_curso` (`id_curso`);

--
-- Indexes for table `estudiantes_por_curso`
--
ALTER TABLE `estudiantes_por_curso`
 ADD PRIMARY KEY (`id_grupo_curso`), ADD UNIQUE KEY `correo_estudiante` (`correo_estudiante`), ADD KEY `nombre_grupo` (`nombre_grupo`);

--
-- Indexes for table `grupos_proyectos`
--
ALTER TABLE `grupos_proyectos`
 ADD PRIMARY KEY (`id_grupo`,`nombre_grupo`), ADD KEY `nombre_grupo` (`nombre_grupo`);

--
-- Indexes for table `periodo_votacion`
--
ALTER TABLE `periodo_votacion`
 ADD PRIMARY KEY (`id_periodo`,`id_votacion`), ADD KEY `id_votacion` (`id_votacion`);

--
-- Indexes for table `portafolio`
--
ALTER TABLE `portafolio`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `usuario_correo` (`usuario_correo`);

--
-- Indexes for table `proyectos`
--
ALTER TABLE `proyectos`
 ADD PRIMARY KEY (`id_proyecto`), ADD UNIQUE KEY `id_grupo` (`id_grupo`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
 ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `rubros`
--
ALTER TABLE `rubros`
 ADD PRIMARY KEY (`id_rubro`);

--
-- Indexes for table `rubros_por_cursos`
--
ALTER TABLE `rubros_por_cursos`
 ADD PRIMARY KEY (`id_rubrica`,`id_rubro`), ADD KEY `id_rubro` (`id_rubro`);

--
-- Indexes for table `tareas`
--
ALTER TABLE `tareas`
 ADD PRIMARY KEY (`correo_usuario`), ADD KEY `id_tarea` (`id_tarea`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`correo`,`userRole`), ADD UNIQUE KEY `cedula` (`cedula`), ADD KEY `id_role` (`userRole`), ADD KEY `correo` (`correo`), ADD KEY `correo_2` (`correo`);

--
-- Indexes for table `votacion`
--
ALTER TABLE `votacion`
 ADD PRIMARY KEY (`id_votacion`), ADD KEY `correo_usuario` (`correo_usuario`), ADD KEY `correo_usuario_2` (`correo_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `archivos`
--
ALTER TABLE `archivos`
MODIFY `id_archivo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `area_profesor`
--
ALTER TABLE `area_profesor`
MODIFY `id_area` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `carreras`
--
ALTER TABLE `carreras`
MODIFY `id_carrera` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
MODIFY `id_curso` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `periodo_votacion`
--
ALTER TABLE `periodo_votacion`
MODIFY `id_periodo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `portafolio`
--
ALTER TABLE `portafolio`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `proyectos`
--
ALTER TABLE `proyectos`
MODIFY `id_proyecto` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
MODIFY `id_role` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `rubros`
--
ALTER TABLE `rubros`
MODIFY `id_rubro` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `votacion`
--
ALTER TABLE `votacion`
MODIFY `id_votacion` int(10) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `archivos`
--
ALTER TABLE `archivos`
ADD CONSTRAINT `archivos_ibfk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`);

--
-- Constraints for table `area_profesor`
--
ALTER TABLE `area_profesor`
ADD CONSTRAINT `area_profesor_ibfk_1` FOREIGN KEY (`profesor`) REFERENCES `cursos` (`prof_encargado`);

--
-- Constraints for table `carreras_usuarios`
--
ALTER TABLE `carreras_usuarios`
ADD CONSTRAINT `carreras_usuarios_ibfk_1` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id_carrera`),
ADD CONSTRAINT `carreras_usuarios_ibfk_2` FOREIGN KEY (`usuario_correo`) REFERENCES `usuarios` (`correo`);

--
-- Constraints for table `cursos_carreras`
--
ALTER TABLE `cursos_carreras`
ADD CONSTRAINT `cursos_carreras_ibfk_1` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id_carrera`),
ADD CONSTRAINT `cursos_carreras_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`);

--
-- Constraints for table `estudiantes_por_curso`
--
ALTER TABLE `estudiantes_por_curso`
ADD CONSTRAINT `estudiantes_por_curso_ibfk_1` FOREIGN KEY (`correo_estudiante`) REFERENCES `usuarios` (`correo`);

--
-- Constraints for table `grupos_proyectos`
--
ALTER TABLE `grupos_proyectos`
ADD CONSTRAINT `grupos_proyectos_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `proyectos` (`id_grupo`),
ADD CONSTRAINT `grupos_proyectos_ibfk_2` FOREIGN KEY (`nombre_grupo`) REFERENCES `estudiantes_por_curso` (`nombre_grupo`);

--
-- Constraints for table `periodo_votacion`
--
ALTER TABLE `periodo_votacion`
ADD CONSTRAINT `periodo_votacion_ibfk_1` FOREIGN KEY (`id_votacion`) REFERENCES `votacion` (`id_votacion`);

--
-- Constraints for table `portafolio`
--
ALTER TABLE `portafolio`
ADD CONSTRAINT `portafolio_ibfk_1` FOREIGN KEY (`usuario_correo`) REFERENCES `usuarios` (`correo`);

--
-- Constraints for table `proyectos`
--
ALTER TABLE `proyectos`
ADD CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupos_proyectos` (`id_grupo`);

--
-- Constraints for table `rubros_por_cursos`
--
ALTER TABLE `rubros_por_cursos`
ADD CONSTRAINT `rubros_por_cursos_ibfk_1` FOREIGN KEY (`id_rubro`) REFERENCES `rubros` (`id_rubro`);

--
-- Constraints for table `votacion`
--
ALTER TABLE `votacion`
ADD CONSTRAINT `votacion_ibfk_1` FOREIGN KEY (`correo_usuario`) REFERENCES `usuarios` (`correo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
