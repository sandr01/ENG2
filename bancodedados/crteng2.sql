-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/05/2024 às 20:36
-- Versão do servidor: 8.0.37
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crteng2`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluguel`
--

CREATE TABLE `aluguel` (
  `aluguel_id` int NOT NULL,
  `equipamento_id` int DEFAULT NULL,
  `profissional_id` int DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_fim` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro_equipamento`
--

CREATE TABLE `cadastro_equipamento` (
  `cadastro_equipamento_id` int NOT NULL,
  `equipamento_id` int DEFAULT NULL,
  `profissional_id` int DEFAULT NULL,
  `data_cadastro` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro_profissional`
--

CREATE TABLE `cadastro_profissional` (
  `cadastro_profissional_id` int NOT NULL,
  `profissional_id` int DEFAULT NULL,
  `setor_id` int DEFAULT NULL,
  `data_cadastro` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `equipamento`
--

CREATE TABLE `equipamento` (
  `equipamento_id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ordem_aluguel`
--

CREATE TABLE `ordem_aluguel` (
  `ordem_aluguel_id` int NOT NULL,
  `aluguel_id` int DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `profissional`
--

CREATE TABLE `profissional` (
  `profissional_id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `relatorio`
--

CREATE TABLE `relatorio` (
  `relatorio_id` int NOT NULL,
  `profissional_id` int DEFAULT NULL,
  `data` date DEFAULT NULL,
  `detalhes` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `setor`
--

CREATE TABLE `setor` (
  `setor_id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `aluguel`
--
ALTER TABLE `aluguel`
  ADD PRIMARY KEY (`aluguel_id`),
  ADD KEY `equipamento_id` (`equipamento_id`),
  ADD KEY `profissional_id` (`profissional_id`);

--
-- Índices de tabela `cadastro_equipamento`
--
ALTER TABLE `cadastro_equipamento`
  ADD PRIMARY KEY (`cadastro_equipamento_id`),
  ADD KEY `equipamento_id` (`equipamento_id`),
  ADD KEY `profissional_id` (`profissional_id`);

--
-- Índices de tabela `cadastro_profissional`
--
ALTER TABLE `cadastro_profissional`
  ADD PRIMARY KEY (`cadastro_profissional_id`),
  ADD KEY `profissional_id` (`profissional_id`),
  ADD KEY `setor_id` (`setor_id`);

--
-- Índices de tabela `equipamento`
--
ALTER TABLE `equipamento`
  ADD PRIMARY KEY (`equipamento_id`);

--
-- Índices de tabela `ordem_aluguel`
--
ALTER TABLE `ordem_aluguel`
  ADD PRIMARY KEY (`ordem_aluguel_id`),
  ADD KEY `aluguel_id` (`aluguel_id`);

--
-- Índices de tabela `profissional`
--
ALTER TABLE `profissional`
  ADD PRIMARY KEY (`profissional_id`);

--
-- Índices de tabela `relatorio`
--
ALTER TABLE `relatorio`
  ADD PRIMARY KEY (`relatorio_id`),
  ADD KEY `profissional_id` (`profissional_id`);

--
-- Índices de tabela `setor`
--
ALTER TABLE `setor`
  ADD PRIMARY KEY (`setor_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aluguel`
--
ALTER TABLE `aluguel`
  MODIFY `aluguel_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cadastro_equipamento`
--
ALTER TABLE `cadastro_equipamento`
  MODIFY `cadastro_equipamento_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cadastro_profissional`
--
ALTER TABLE `cadastro_profissional`
  MODIFY `cadastro_profissional_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `equipamento`
--
ALTER TABLE `equipamento`
  MODIFY `equipamento_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ordem_aluguel`
--
ALTER TABLE `ordem_aluguel`
  MODIFY `ordem_aluguel_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `profissional`
--
ALTER TABLE `profissional`
  MODIFY `profissional_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `relatorio`
--
ALTER TABLE `relatorio`
  MODIFY `relatorio_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `setor`
--
ALTER TABLE `setor`
  MODIFY `setor_id` int NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `aluguel`
--
ALTER TABLE `aluguel`
  ADD CONSTRAINT `aluguel_ibfk_1` FOREIGN KEY (`equipamento_id`) REFERENCES `equipamento` (`equipamento_id`),
  ADD CONSTRAINT `aluguel_ibfk_2` FOREIGN KEY (`profissional_id`) REFERENCES `profissional` (`profissional_id`);

--
-- Restrições para tabelas `cadastro_equipamento`
--
ALTER TABLE `cadastro_equipamento`
  ADD CONSTRAINT `cadastro_equipamento_ibfk_1` FOREIGN KEY (`equipamento_id`) REFERENCES `equipamento` (`equipamento_id`),
  ADD CONSTRAINT `cadastro_equipamento_ibfk_2` FOREIGN KEY (`profissional_id`) REFERENCES `profissional` (`profissional_id`);

--
-- Restrições para tabelas `cadastro_profissional`
--
ALTER TABLE `cadastro_profissional`
  ADD CONSTRAINT `cadastro_profissional_ibfk_1` FOREIGN KEY (`profissional_id`) REFERENCES `profissional` (`profissional_id`),
  ADD CONSTRAINT `cadastro_profissional_ibfk_2` FOREIGN KEY (`setor_id`) REFERENCES `setor` (`setor_id`);

--
-- Restrições para tabelas `ordem_aluguel`
--
ALTER TABLE `ordem_aluguel`
  ADD CONSTRAINT `ordem_aluguel_ibfk_1` FOREIGN KEY (`aluguel_id`) REFERENCES `aluguel` (`aluguel_id`);

--
-- Restrições para tabelas `relatorio`
--
ALTER TABLE `relatorio`
  ADD CONSTRAINT `relatorio_ibfk_1` FOREIGN KEY (`profissional_id`) REFERENCES `profissional` (`profissional_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
