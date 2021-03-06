-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2015 a las 07:20:15
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
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `agregarEstudiantesGrupo`(IN `IdCurso` INT, IN `CorreoEstud` VARCHAR(500), IN `GrupoEntr` VARCHAR(500))
    NO SQL
INSERT INTO `estudiantes_por_curso`(`id_grupo_curso`, `correo_estudiante`, `grupo_asignado`) VALUES (IdCurso, CorreoEstud, GrupoEntr)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `agregarGrupoDirector`(IN `IdCurso` VARCHAR(500), IN `NombreGrupo` VARCHAR(500))
    NO SQL
INSERT INTO `gruposcurso`(`IdCurso`, `NombreDelGrupo`) VALUES (IdCurso,NombreGrupo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `agregarProfesorGrupo`(IN `Rol` VARCHAR(500), IN `Nombre` VARCHAR(500), IN `Grupo` VARCHAR(500))
    NO SQL
INSERT INTO `area_profesor`(`nombre`, `profesor`, `grupoAsignado`) VALUES (Rol, Nombre, Grupo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `agregarRubricaDirector`(IN `nombreRub` VARCHAR(500), IN `nombreCur` VARCHAR(500))
    NO SQL
INSERT INTO `rubros_por_cursos`(`NombreRubrica`, `CursoAsignado`) VALUES (nombreRub, nombreCur)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `agregarRubrosDirector`(IN `nombre` VARCHAR(500), IN `valor` INT, IN `RubNombre` VARCHAR(500))
    NO SQL
INSERT INTO `rubros`(`nombre`, `valor`, `RubricaAsignada`) VALUES (nombre, valor, RubNombre)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarEstudiante`(IN `correo1` VARCHAR(50))
    NO SQL
DELETE FROM `proyectofinalweb`.`grupos_proyectos` WHERE `grupos_proyectos`.`correoEstudiante` = correo1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarEstudiantesGrupo`(IN `nombreEstGrupo` VARCHAR(500))
    NO SQL
DELETE FROM `estudiantes_por_curso` WHERE `grupo_asignado` = nombreEstGrupo$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarGrupo`(IN `nombreG` VARCHAR(50))
    NO SQL
DELETE FROM `proyectofinalweb`.`grupos_proyectos` WHERE `grupos_proyectos`.`nombre_grupo` = nombreG$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarGrupoCurso`(IN `nomGr` VARCHAR(500))
    NO SQL
DELETE FROM `gruposcurso` WHERE `NombreDelGrupo` = nomGr$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarProfesoresGrupo`(IN `GruProf` VARCHAR(500))
    NO SQL
DELETE FROM `area_profesor` WHERE `grupoAsignado` = GruProf$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarRubrica`(IN `nombRub` VARCHAR(500))
    NO SQL
DELETE FROM `rubros_por_cursos` WHERE `NombreRubrica` = nombRub$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarRubrosRubrica`(IN `nomb` VARCHAR(500))
    NO SQL
DELETE FROM `rubros` WHERE `RubricaAsignada` = nomb$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarCarrera`(IN `nombreCarrera` VARCHAR(50))
    NO SQL
SELECT `id_carrera`, `nombre`, `codCarrera`, `dirCarrera`, `inactivo` FROM `proyectoFinalWeb`.`carreras`  where `nombre` = nombreCarrera$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarCorreosEquipos`()
    NO SQL
SELECT  `correoEstudiante`FROM `grupos_proyectos`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarCurso`(IN `nombreCurso` VARCHAR(50))
    NO SQL
SELECT `id_curso`, `nombre`, `cuatrimestre`, `annoLectivo`, `horario`, `creditos`, `cod_curso`, `inactivo` FROM `proyectoFinalWeb`.`cursos`  where `nombre` = nombreCurso$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarUsuario`(IN `email` VARCHAR(50))
    NO SQL
Select * from usuarios where `correo` = email$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarRubroValor`(IN `valorRubro` INT, IN `nomRubro` VARCHAR(500), IN `nombRubrica` VARCHAR(500))
    NO SQL
UPDATE `rubros` SET `valor`= valorRubro WHERE `nombre` = nomRubro AND `RubricaAsignada` = nombRubrica$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Editar_borrarEstudiantesGrupo`(IN `Grupo` VARCHAR(500), IN `Correo` VARCHAR(500))
    NO SQL
DELETE FROM `estudiantes_por_curso` WHERE `grupo_asignado` = Grupo AND `correo_estudiante` = Correo$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Editar_borrarProfesoresGrupo`(IN `Grupo` VARCHAR(500), IN `Nombre` VARCHAR(500))
    NO SQL
DELETE FROM `area_profesor` WHERE `grupoAsignado` = Grupo AND `profesor` = Nombre$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ingresarCarrera`(IN `nombre` VARCHAR(50), IN `director` VARCHAR(500), IN `inactivo` BOOLEAN, IN `codigo` VARCHAR(50))
    NO SQL
INSERT INTO `proyectoFinalWeb`.`carreras` (`id_carrera`, `nombre`, `dirCarrera`, `inactivo`, `codCarrera`) VALUES (NULL, nombre, director, inactivo, codigo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ingresarCurso`(IN `nombre` VARCHAR(100), IN `cuatrimestre` VARCHAR(50), IN `anno` INT(4), IN `horario` VARCHAR(50), IN `creditos` INT(10), IN `codigo` VARCHAR(50))
    NO SQL
INSERT INTO `proyectoFinalWeb`.`cursos` (`id_curso`, `nombre`, `cuatrimestre`, `annoLectivo`, `horario`,`creditos`, `cod_Curso`) VALUES (NULL, nombre, cuatrimestre, anno, horario, creditos, codigo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ingresarUsuario`(IN `correo` VARCHAR(100), IN `cedula` INT(9), IN `nombre` VARCHAR(50), IN `primer_apellido` VARCHAR(50), IN `segundo_apellido` VARCHAR(50), IN `contrasena` VARCHAR(100), IN `direccion` VARCHAR(500), IN `fecha_nacimiento` DATE, IN `id_role` VARCHAR(50), IN `foto` BLOB, IN `inactivo` TINYINT(1))
    NO SQL
INSERT INTO `proyectoFinalWeb`.`usuarios` (`correo`, `cedula`, `nombre`, `primerApellido`, `segundoApellido`, `contrasena`, `direccion`, `fechaNacimiento`, `userRole`, `foto`, `inactivo`) VALUES (correo, cedula, nombre, primer_apellido, segundo_apellido, contrasena, direccion, fecha_nacimiento, id_role, foto, inactivo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertarEquipo`(IN `nombreEquipo` VARCHAR(50), IN `correoEestudiante` VARCHAR(50), IN `rolEstudiante` VARCHAR(50))
    NO SQL
INSERT INTO `grupos_proyectos`(`nombre_grupo`, `correoEstudiante`, `roleEstudiante`) VALUES (nombreEquipo,correoEestudiante,rolEstudiante)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertarEstudiantesEquipo`(IN `nombreEquipo` VARCHAR(100), IN `correoEstudiante` VARCHAR(100), IN `nombreRol` VARCHAR(100))
    NO SQL
INSERT INTO `grupos_proyectos`(`nombre_grupo`, `correoEstudiante`, `roleEstudiante`) VALUES (nombreEquipo,correoEstudiante,nombreRol)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarCusros`(IN `profe` VARCHAR(50))
    NO SQL
SELECT `id_curso`, `nombre`FROM `cursos` WHERE  `inactivo` <=0 AND `prof_encargado`= profe$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarEquipos`()
    NO SQL
SELECT DISTINCT `nombre_grupo`FROM `grupos_proyectos`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarEstudiantes`(IN `idCurso` INT(10))
    NO SQL
SELECT DISTINCT u.nombre, u.primerApellido, u.segundoApellido, u.correo FROM estudiantes_por_curso g, usuarios u WHERE g.id_grupo_curso = idCurso and g.correo_estudiante = u.correo$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarEstudiantesEquipo`(IN `nombreEquipo1` VARCHAR(50))
    NO SQL
SELECT  p.id_grupo_curso,g.correoEstudiante,g.roleEstudiante, u.nombre, u.primerApellido, u.segundoApellido FROM estudiantes_por_curso p, grupos_proyectos g, usuarios u WHERE g.nombre_grupo = nombreEquipo1 and g.correoEstudiante = u.correo and p.correo_estudiante = u.correo$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modificarCarrera`(IN `nombre` VARCHAR(50), IN `director` VARCHAR(500), IN `codigo` VARCHAR(50), IN `id` INT(10), IN `inactivo` BOOLEAN)
    NO SQL
UPDATE `proyectoFinalWeb`.`carreras` SET `nombre` = nombre, `dirCarrera` = director, `codCarrera` = codigo, `inactivo` = inactivo WHERE `id_carrera` = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modificarCurso`(IN `nombreCurso` VARCHAR(100), IN `cuatrimestre` VARCHAR(50), IN `anno` INT(4), IN `horario` VARCHAR(50), IN `credito` INT(10), IN `codCurso` VARCHAR(50), IN `inactivo` BOOLEAN, IN `id` INT(10))
    NO SQL
UPDATE `proyectoFinalWeb`.`cursos` SET `nombre` = nombreCurso, `cuatrimestre` = cuatrimestre, `annoLectivo` = anno, `horario` = horario, `creditos` = credito, `cod_curso` = codCurso, `inactivo` = inactivo WHERE `id_curso` = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modificarDescripcionPortafolio`(IN `descUser` VARCHAR(500), IN `email` VARCHAR(50))
    NO SQL
UPDATE `proyectoFinalWeb`.`portafolio` SET `descripcion` = descUser WHERE `usuario_correo` = email$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modificarInfoUsuario`(IN `tel` INT(20), IN `dir` VARCHAR(500), IN `email` VARCHAR(50))
    NO SQL
UPDATE `proyectoFinalWeb`.`usuarios` SET `telefono` = tel, `direccion` = dir WHERE `correo` = email$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modificarUsuario`(IN `email` VARCHAR(100), IN `ced` INT(9), IN `name` VARCHAR(50), IN `lastName` VARCHAR(50), IN `lastName2` VARCHAR(50), IN `address` VARCHAR(500), IN `tel` INT(20), IN `pass` VARCHAR(100), IN `dateBirth` DATE, IN `role` VARCHAR(50), IN `inactivo` BOOLEAN, IN `id` INT(10))
    NO SQL
UPDATE `proyectoFinalWeb`.`usuarios` SET `nombre` = name,  `correo` = email,  `cedula`= ced,  `primerApellido` = lastName,  `segundoApellido` = lastName2,  `direccion` = address, `telefono` = tel, `contrasena` = pass,  `fechaNacimiento` = dateBirth, `userRole` = role,  `inactivo` = inactivo WHERE `idUsuario` = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `nombreEstudiantesPorEquipo`()
    NO SQL
SELECT  u.nombre, u.primerApellido, u.segundoApellido FROM grupos_proyectos g, usuarios u WHERE u.correo = g.correoEstudiante$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerPerfil`(IN `correoUser` VARCHAR(50))
    NO SQL
Select p.descripcion, u.nombre, u.primerApellido, u.segundoApellido, u.cedula, u.direccion, u.fechaNacimiento, u.correo, u.telefono, u.foto from portafolio p, usuarios u where u.correo=correoUser and p.usuario_correo=correoUser$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usuario_login`()
select * from usuarios$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE IF NOT EXISTS `archivos` (
  `id_archivo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `tipo` varchar(50) NOT NULL COMMENT 'Tipo de archivo',
  `fecha_creacion` date NOT NULL,
  `id_proyecto` int(10) NOT NULL,
  PRIMARY KEY (`id_archivo`),
  KEY `id_proyecto` (`id_proyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area_profesor`
--

CREATE TABLE IF NOT EXISTS `area_profesor` (
  `id_area` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `profesor` varchar(100) NOT NULL,
  `grupoAsignado` varchar(100) NOT NULL,
  PRIMARY KEY (`id_area`),
  KEY `profesor` (`profesor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE IF NOT EXISTS `carreras` (
  `id_carrera` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `dirCarrera` varchar(500) NOT NULL,
  `inactivo` tinyint(1) DEFAULT NULL,
  `codCarrera` varchar(50) NOT NULL,
  PRIMARY KEY (`id_carrera`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Volcado de datos para la tabla `carreras`
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
-- Estructura de tabla para la tabla `carreras_usuarios`
--

CREATE TABLE IF NOT EXISTS `carreras_usuarios` (
  `id_carrera` int(10) NOT NULL,
  `usuario_correo` varchar(100) NOT NULL,
  PRIMARY KEY (`id_carrera`),
  UNIQUE KEY `usuario_correo` (`usuario_correo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE IF NOT EXISTS `cursos` (
  `id_curso` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `prof_encargado` varchar(100) NOT NULL,
  `cuatrimestre` varchar(50) NOT NULL,
  `horario` varchar(50) NOT NULL,
  `rubrica_curso` varchar(50) NOT NULL,
  `annoLectivo` int(4) NOT NULL,
  `cod_Curso` varchar(50) NOT NULL,
  `creditos` int(10) NOT NULL,
  `grupo_nombre` varchar(100) NOT NULL,
  `inactivo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_curso`),
  KEY `prof_encargado` (`prof_encargado`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id_curso`, `nombre`, `prof_encargado`, `cuatrimestre`, `horario`, `rubrica_curso`, `annoLectivo`, `cod_Curso`, `creditos`, `grupo_nombre`, `inactivo`) VALUES
(1, 'Diseño 3', 'Pablo Castro', 'II Cuatrimestre', 'jueves', 'test', 2020, 'rwer', 3, '', 0),
(2, 'Operativos3', '', 'II cuatrimestre', 'lunes', '', 2014, 'Tw-342', 2, '', 1),
(3, 'Ingenieria', '', 'II Cuatrimestre', 'lunes', '', 2018, 'T.-rwe', 1, '', NULL),
(4, 'TestCurso', '', 'III Cuatrimestre', 'MArtes', '', 2021, 'rewr', 3, '', 1),
(5, 'Tijeras', '', 'III Cuatrimestre', 'Lunes', '', 2015, 'Terwwrew', 4, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos_carreras`
--

CREATE TABLE IF NOT EXISTS `cursos_carreras` (
  `id_carrera` int(10) NOT NULL,
  `id_curso` int(10) NOT NULL,
  PRIMARY KEY (`id_carrera`,`id_curso`),
  KEY `id_curso` (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cursos_carreras`
--

INSERT INTO `cursos_carreras` (`id_carrera`, `id_curso`) VALUES
(16, 2),
(16, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE IF NOT EXISTS `documentos` (
  `titulo` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `equipo` varchar(100) NOT NULL,
  `archivo` mediumblob NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes_por_curso`
--

CREATE TABLE IF NOT EXISTS `estudiantes_por_curso` (
  `id_grupo_curso` int(10) NOT NULL,
  `correo_estudiante` varchar(100) NOT NULL,
  `nombre_equipo` varchar(100) NOT NULL,
  `grupo_asignado` varchar(100) NOT NULL,
  `id_rubrica` varchar(50) DEFAULT NULL,
  `nota_final` int(10) DEFAULT NULL,
  `id_rubrica_fact_humano` int(10) DEFAULT NULL,
  `nota_final_fact_humano` int(10) DEFAULT NULL,
  KEY `nombre_grupo` (`nombre_equipo`),
  KEY `nombre_equipo` (`nombre_equipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estudiantes_por_curso`
--

INSERT INTO `estudiantes_por_curso` (`id_grupo_curso`, `correo_estudiante`, `nombre_equipo`, `grupo_asignado`, `id_rubrica`, `nota_final`, `id_rubrica_fact_humano`, `nota_final_fact_humano`) VALUES
(0, 'test@gmail.com', 'Test', 'Grupo2', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gruposcurso`
--

CREATE TABLE IF NOT EXISTS `gruposcurso` (
  `IdGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `IdCurso` int(11) NOT NULL,
  `NombreDelGrupo` varchar(500) NOT NULL,
  PRIMARY KEY (`IdGrupo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos_proyectos`
--

CREATE TABLE IF NOT EXISTS `grupos_proyectos` (
  `id_grupo` int(10) NOT NULL,
  `nombre_grupo` varchar(100) NOT NULL,
  `correoEstudiante` varchar(100) DEFAULT NULL,
  `roleEstudiante` varchar(100) DEFAULT NULL,
  KEY `id_grupo` (`id_grupo`),
  KEY `nombre_grupo` (`nombre_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grupos_proyectos`
--

INSERT INTO `grupos_proyectos` (`id_grupo`, `nombre_grupo`, `correoEstudiante`, `roleEstudiante`) VALUES
(0, 'testGrupo', 'test@gmail.com', NULL),
(1, 'fdsf', 'fsfasd', NULL),
(3, 'test', 'test@gmail.com', 'Coordinador'),
(3, 'test', 'fsfasfdfa@gmail.com', 'Calidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periodo_votacion`
--

CREATE TABLE IF NOT EXISTS `periodo_votacion` (
  `id_periodo` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicio` date NOT NULL,
  `fecha_cierre` date NOT NULL,
  `id_votacion` int(10) NOT NULL,
  PRIMARY KEY (`id_periodo`,`id_votacion`),
  KEY `id_votacion` (`id_votacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portafolio`
--

CREATE TABLE IF NOT EXISTS `portafolio` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `usuario_correo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `correo_portafolio` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_correo` (`usuario_correo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `portafolio`
--

INSERT INTO `portafolio` (`id`, `usuario_correo`, `descripcion`, `correo_portafolio`) VALUES
(1, 'test@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non porttitor felis, a tincidunt ante. Quisque quis rutrum turpis, nec pharetra purus. Donec nunc felis, pretium non nisi at, laoreet fermentum sem. Aliquam magna odio, lacinia sed dolor in, tristique sodales ligula. Praesent commodo bibendum metus quis sagittis. Aenean enim augue, interdum quis lectus non, placerat vestibulum eros', 'danyhv0202@gmail.com'),
(2, 'testuser@gmail.com', 'fadsfadsf fadsfadsfads fadfadsfadfda fsdfadsfads', 'daniela@user.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE IF NOT EXISTS `proyectos` (
  `id_proyecto` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_equipo` varchar(100) NOT NULL,
  `calificacion` int(10) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha_ini_subir_arch` date NOT NULL,
  `fecha_cierre_subir_arch` date NOT NULL,
  `pasa_a_votacion` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`),
  UNIQUE KEY `id_grupo` (`nombre_equipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id_role` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL COMMENT 'nombre del role',
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_role`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Profesor'),
(3, 'Director de Carrera'),
(4, 'Decano'),
(5, 'Estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubros`
--

CREATE TABLE IF NOT EXISTS `rubros` (
  `id_rubro` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `valor` int(10) NOT NULL,
  `id_rubrica` int(10) NOT NULL,
  PRIMARY KEY (`id_rubro`),
  KEY `id_rubrica` (`id_rubrica`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubros_por_cursos`
--

CREATE TABLE IF NOT EXISTS `rubros_por_cursos` (
  `id_rubrica` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_rubrica`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE IF NOT EXISTS `tareas` (
  `correo_usuario` varchar(100) NOT NULL,
  `fechaEntrega` date NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `hora` time NOT NULL,
  `id_tarea` int(100) NOT NULL,
  PRIMARY KEY (`correo_usuario`),
  KEY `id_tarea` (`id_tarea`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
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
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`correo`,`userRole`),
  UNIQUE KEY `cedula` (`cedula`),
  UNIQUE KEY `idUsuario` (`idUsuario`),
  KEY `id_role` (`userRole`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`correo`, `cedula`, `nombre`, `primerApellido`, `segundoApellido`, `telefono`, `contrasena`, `direccion`, `fechaNacimiento`, `userRole`, `foto`, `inactivo`, `idUsuario`) VALUES
('acorderop@ucenfotec.ac.cr', 349348934, 'Álvaro', 'Cordero', 'Peña', 8782084, '12345', 'Cartago', '2015-04-01', 'DirectorCarrera', NULL, NULL, 12),
('admin@ucenfotec.ac.cr', 87892380, 'Administrador', 'admin', 'admin', 88973022, '12345', 'San Jose', '2015-04-18', 'Administrador', NULL, NULL, 11),
('aguevaraf@ucenfotec.ac.cr', 78273633, 'Alonso', 'Guevara', 'Férnandez', 114256379, '12345', 'Cartago', '2015-04-25', 'Profesor', NULL, NULL, 13),
('fasd324321@ucenfotec.ac.cr', 231231232, 'Rodrigo', 'Ovares', 'Arroyo', NULL, 'fadsfads', 'San Francisco', '0000-00-00', 'Decano', 231231232, 0, 2),
('mrosalesm@ucenfotec.ac.cr', 113630736, 'Melissa', 'Rosales', 'Mora', 22780329, '12345', 'Tres Ríos, Cartago', '2015-04-09', 'Estudiante', NULL, NULL, 10),
('testuser@gmail.com', 987654321, 'Alvaro', 'Quesada', 'Quesada', 0, '1234', 'Heredia', '2014-05-05', '2', NULL, NULL, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votacion`
--

CREATE TABLE IF NOT EXISTS `votacion` (
  `id_votacion` int(10) NOT NULL AUTO_INCREMENT,
  `id_proyecto` int(10) NOT NULL,
  `correo_usuario` varchar(100) NOT NULL,
  `promedio` int(10) NOT NULL,
  PRIMARY KEY (`id_votacion`),
  KEY `correo_usuario` (`correo_usuario`),
  KEY `correo_usuario_2` (`correo_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD CONSTRAINT `archivos_ibfk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`);

--
-- Filtros para la tabla `carreras_usuarios`
--
ALTER TABLE `carreras_usuarios`
  ADD CONSTRAINT `carreras_usuarios_ibfk_1` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id_carrera`),
  ADD CONSTRAINT `carreras_usuarios_ibfk_2` FOREIGN KEY (`usuario_correo`) REFERENCES `usuarios` (`correo`);

--
-- Filtros para la tabla `cursos_carreras`
--
ALTER TABLE `cursos_carreras`
  ADD CONSTRAINT `cursos_carreras_ibfk_1` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id_carrera`),
  ADD CONSTRAINT `cursos_carreras_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`);

--
-- Filtros para la tabla `periodo_votacion`
--
ALTER TABLE `periodo_votacion`
  ADD CONSTRAINT `periodo_votacion_ibfk_1` FOREIGN KEY (`id_votacion`) REFERENCES `votacion` (`id_votacion`);

--
-- Filtros para la tabla `votacion`
--
ALTER TABLE `votacion`
  ADD CONSTRAINT `votacion_ibfk_1` FOREIGN KEY (`correo_usuario`) REFERENCES `usuarios` (`correo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
