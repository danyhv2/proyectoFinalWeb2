-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 22, 2015 at 07:25 AM
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
  `grupoAsignado` varchar(100) NOT NULL
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carreras`
--

INSERT INTO `carreras` (`id_carrera`, `nombre`, `dirCarrera`, `inactivo`, `codCarrera`) VALUES
(1, 'Visual', 'Marcela', 1, 'TS-2132'),
(2, 'Diseño', 'Marcela', 0, '1234'),
(3, 'MateII', 'Daniela ', 1, 'T234'),
(16, 'TestCarreraII', 'Melisa Rosales Rosales', 1, '2332'),
(20, 'Diseño Visual', 'Melisa Rosales Rosales', 0, 'fsdf'),
(22, 'Proyecto WebII', 'Marcela', 0, 'T24322');

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
  `annoLectivo` int(4) NOT NULL,
  `cod_Curso` varchar(50) NOT NULL,
  `creditos` int(10) NOT NULL,
  `grupo_nombre` varchar(100) NOT NULL,
  `inactivo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id_curso`, `nombre`, `prof_encargado`, `cuatrimestre`, `horario`, `rubrica_curso`, `annoLectivo`, `cod_Curso`, `creditos`, `grupo_nombre`, `inactivo`) VALUES
(1, 'Diseño 3', 'Pablo Castro', 'II Cuatrimestre', 'jueves', 'test', 2020, 'rwer', 3, '', 0),
(2, 'Operativos3', '', 'II cuatrimestre', 'lunes', '', 2014, 'Tw-342', 2, '', 1),
(3, 'Ingenieria', '', 'II Cuatrimestre', 'lunes', '', 2018, 'T.-rwe', 1, '', NULL),
(4, 'TestCurso', '', 'III Cuatrimestre', 'MArtes', '', 2021, 'rewr', 3, '', 1),
(5, 'Tijeras', '', 'III Cuatrimestre', 'Lunes', '', 2015, 'Terwwrew', 4, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cursos_carreras`
--

CREATE TABLE IF NOT EXISTS `cursos_carreras` (
  `id_carrera` int(10) NOT NULL,
  `id_curso` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cursos_carreras`
--

INSERT INTO `cursos_carreras` (`id_carrera`, `id_curso`) VALUES
(16, 2),
(16, 3);

-- --------------------------------------------------------

--
-- Table structure for table `documentos`
--

CREATE TABLE IF NOT EXISTS `documentos` (
  `titulo` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `equipo` varchar(100) NOT NULL,
  `archivo` mediumblob NOT NULL,
`id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `documentos`
--

INSERT INTO `documentos` (`titulo`, `fecha`, `descripcion`, `equipo`, `archivo`, `id`) VALUES
('Prueba 1', '2015-04-20', 'kjasjcajsciajisoas', 'DMGCODERS', 0x637275645f616e67756c61726a732e726172, 55),
('Diseño', '2015-04-20', 'test', 'DMGCODERS', 0x637275645f616e67756c61726a732e726172, 56),
('rezdr', '2015-04-20', 'jhvñuyhvuh', 'khvjhv .jh', 0x4361736f732064652075736f20657874656e6469646f2e646f6378, 57),
('rezdr', '2015-04-20', 'jhvñuyhvuh', 'khvjhv .jh', 0x4361736f732064652075736f20657874656e6469646f2e646f6378, 58),
('adcac', '2015-04-20', 'acvac', 'ascac', 0x6361736f7320657874656e6469646f732e646f6378, 59),
('test', '2015-04-20', 'yytteufvas', 'test', 0x637275645f616e67756c61726a732e726172, 60),
('Proyecto 1', '2015-04-20', 'kancoi{ha{oichoiadc', 'DMGCODERS', 0x446f63756d656e746f2064652044697365c3b16f2e646f6378, 61),
('alksnhcjansca', '2015-04-20', 'lkanclKANs', ' ñakcnaLKS', 0x446f63756d656e746f20646520416ec3a16c697369732e646f6378, 62);

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes_por_curso`
--

CREATE TABLE IF NOT EXISTS `estudiantes_por_curso` (
  `id_grupo_curso` int(10) NOT NULL,
  `correo_estudiante` varchar(100) NOT NULL,
  `nombre_equipo` varchar(100) NOT NULL,
  `grupo_asignado` varchar(100) NOT NULL,
  `id_rubrica` varchar(50) DEFAULT NULL,
  `nota_final` int(10) DEFAULT NULL,
  `id_rubrica_fact_humano` int(10) DEFAULT NULL,
  `nota_final_fact_humano` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `estudiantes_por_curso`
--

INSERT INTO `estudiantes_por_curso` (`id_grupo_curso`, `correo_estudiante`, `nombre_equipo`, `grupo_asignado`, `id_rubrica`, `nota_final`, `id_rubrica_fact_humano`, `nota_final_fact_humano`) VALUES
(0, 'test@gmail.com', 'Test', 'Grupo2', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gruposcurso`
--

CREATE TABLE IF NOT EXISTS `gruposcurso` (
`IdGrupo` int(11) NOT NULL,
  `IdCurso` int(11) NOT NULL,
  `NombreDelGrupo` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grupos_proyectos`
--

CREATE TABLE IF NOT EXISTS `grupos_proyectos` (
  `id_grupo` int(10) NOT NULL,
  `nombre_grupo` varchar(100) NOT NULL,
  `correoEstudiante` varchar(100) DEFAULT NULL,
  `roleEstudiante` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grupos_proyectos`
--

INSERT INTO `grupos_proyectos` (`id_grupo`, `nombre_grupo`, `correoEstudiante`, `roleEstudiante`) VALUES
(0, 'testGrupo', 'test@gmail.com', NULL),
(1, 'fdsf', 'fsfasd', NULL),
(3, 'test', 'test@gmail.com', 'Coordinador'),
(3, 'test', 'fsfasfdfa@gmail.com', 'Calidad');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portafolio`
--

INSERT INTO `portafolio` (`id`, `usuario_correo`, `descripcion`, `correo_portafolio`) VALUES
(1, 'test@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non porttitor felis, a tincidunt ante. Quisque quis rutrum turpis, nec pharetra purus. Donec nunc felis, pretium non nisi at, laoreet fermentum sem. Aliquam magna odio, lacinia sed dolor in, tristique sodales ligula. Praesent commodo bibendum metus quis sagittis. Aenean enim augue, interdum quis lectus non, placerat vestibulum eros', 'danyhv0202@gmail.com'),
(2, 'testuser@gmail.com', 'fadsfadsf fadsfadsfads fadfadsfadfda fsdfadsfads', 'daniela@user.com');

-- --------------------------------------------------------

--
-- Table structure for table `proyectos`
--

CREATE TABLE IF NOT EXISTS `proyectos` (
`id_proyecto` int(10) NOT NULL,
  `nombre_equipo` varchar(100) NOT NULL,
  `calificacion` int(10) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha_ini_subir_arch` date NOT NULL,
  `fecha_cierre_subir_arch` date NOT NULL,
  `pasa_a_votacion` tinyint(1) DEFAULT NULL
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
  `valor` int(10) NOT NULL,
  `id_rubrica` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rubros_por_cursos`
--

CREATE TABLE IF NOT EXISTS `rubros_por_cursos` (
  `id_rubrica` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL
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
  `telefono` int(20) DEFAULT NULL,
  `contrasena` varchar(100) NOT NULL,
  `direccion` varchar(500) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `userRole` varchar(50) NOT NULL,
  `foto` int(9) DEFAULT NULL,
  `inactivo` tinyint(1) DEFAULT NULL,
`idUsuario` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`correo`, `cedula`, `nombre`, `primerApellido`, `segundoApellido`, `telefono`, `contrasena`, `direccion`, `fechaNacimiento`, `userRole`, `foto`, `inactivo`, `idUsuario`) VALUES
('dfdsffasdf322343@ucenfotec.ac.cr', 321232132, 'Roy', 'Villa', 'Villa', NULL, '4243432', 'rewrew', '0000-00-00', 'Administrador', 321232132, 0, 1),
('fasd324321@ucenfotec.ac.cr', 231231232, 'Rodrigo', 'Ovares', 'Arroyo', NULL, 'fadsfads', 'San Francisco', '0000-00-00', 'Decano', 231231232, 0, 2),
('fdfewrewrrwerre0@ucenfote.ac.cr', 423423423, 'Freddie', 'Hicks', 'fdsdfd', NULL, '42342342', '2544 MARRON RD APT 102', '0000-00-00', 'Profesor', 423423423, 0, 3),
('fsdf332@ucenfotec.ac.cr', 232132131, 'Curtis', 'CONWAY', 'fsdsdf', NULL, 'fdfd', '22800 SARATOGA ST APT 101', '0000-00-00', 'Profesor', 232132131, 0, 4),
('mrosales@ucenfotec.ac.cr', 981122546, 'Melisa', 'Rosales', 'Rosales', 0, 'test1234', 'San Jose', '2015-03-02', '3', NULL, NULL, 5),
('test@gmail.com', 898989987, 'Daniela ', 'Hernandez', 'Villafuerte', 22139090, 'tew3243', 'Pavas, San Jose', '2015-03-02', 'Administrador', NULL, 0, 6),
('testfsdfds@ucenfotec.ac.cr', 434234232, 'Marce', 'Hernanaez', 'fasdfd', 0, '12321321', 'test', '0000-00-00', '3', 434234232, 0, 7),
('testuser@gmail.com', 987654321, 'Alvaro', 'Quesada', 'Quesada', 0, '1234', 'Heredia', '2014-05-05', '2', NULL, NULL, 8),
('testuser@gmail.com', 808080894, 'Lili', 'Vargas', 'Vargas', 88464674, 'test212', 'Limon, Costa Rica', '2015-03-09', 'Decano', NULL, NULL, 9);

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
 ADD PRIMARY KEY (`id_area`), ADD UNIQUE KEY `id_curso` (`grupoAsignado`), ADD KEY `profesor` (`profesor`);

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
-- Indexes for table `documentos`
--
ALTER TABLE `documentos`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estudiantes_por_curso`
--
ALTER TABLE `estudiantes_por_curso`
 ADD KEY `nombre_grupo` (`nombre_equipo`), ADD KEY `nombre_equipo` (`nombre_equipo`);

--
-- Indexes for table `gruposcurso`
--
ALTER TABLE `gruposcurso`
 ADD PRIMARY KEY (`IdGrupo`);

--
-- Indexes for table `grupos_proyectos`
--
ALTER TABLE `grupos_proyectos`
 ADD KEY `id_grupo` (`id_grupo`), ADD KEY `nombre_grupo` (`nombre_grupo`);

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
 ADD PRIMARY KEY (`id_proyecto`), ADD UNIQUE KEY `id_grupo` (`nombre_equipo`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
 ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `rubros`
--
ALTER TABLE `rubros`
 ADD PRIMARY KEY (`id_rubro`), ADD KEY `id_rubrica` (`id_rubrica`);

--
-- Indexes for table `tareas`
--
ALTER TABLE `tareas`
 ADD PRIMARY KEY (`correo_usuario`), ADD KEY `id_tarea` (`id_tarea`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`correo`,`userRole`), ADD UNIQUE KEY `cedula` (`cedula`), ADD UNIQUE KEY `idUsuario` (`idUsuario`), ADD KEY `id_role` (`userRole`);

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
MODIFY `id_carrera` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
MODIFY `id_curso` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `documentos`
--
ALTER TABLE `documentos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT for table `gruposcurso`
--
ALTER TABLE `gruposcurso`
MODIFY `IdGrupo` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `periodo_votacion`
--
ALTER TABLE `periodo_votacion`
MODIFY `id_periodo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `portafolio`
--
ALTER TABLE `portafolio`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
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
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
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
-- Constraints for table `periodo_votacion`
--
ALTER TABLE `periodo_votacion`
ADD CONSTRAINT `periodo_votacion_ibfk_1` FOREIGN KEY (`id_votacion`) REFERENCES `votacion` (`id_votacion`);

--
-- Constraints for table `votacion`
--
ALTER TABLE `votacion`
ADD CONSTRAINT `votacion_ibfk_1` FOREIGN KEY (`correo_usuario`) REFERENCES `usuarios` (`correo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
