USE [OnlineMonitoringWeb_Default_v1]
GO
/****** Object:  Table [hier].[Regional]    Script Date: 04/05/2020 09:26:10 ******/
SET IDENTITY_INSERT [hier].[Regional] ON
INSERT [hier].[Regional] ([RegionalId], [Name]) VALUES (7, N'برق منطقه ای خراسان')
SET IDENTITY_INSERT [hier].[Regional] OFF
/****** Object:  Table [hier].[Province]    Script Date: 04/05/2020 09:26:10 ******/
SET IDENTITY_INSERT [hier].[Province] ON
INSERT [hier].[Province] ([ProvinceId], [Name], [RegionalID]) VALUES (5, N'خراسان رضوی', 7)
INSERT [hier].[Province] ([ProvinceId], [Name], [RegionalID]) VALUES (6, N'خراسان شمالی', 7)
INSERT [hier].[Province] ([ProvinceId], [Name], [RegionalID]) VALUES (7, N'خراسان جنوبی', 7)
SET IDENTITY_INSERT [hier].[Province] OFF
/****** Object:  Table [hier].[Distribution]    Script Date: 04/05/2020 09:26:10 ******/
SET IDENTITY_INSERT [hier].[Distribution] ON
INSERT [hier].[Distribution] ([DistributionId], [Name], [RegionalID]) VALUES (2, N'توزیع برق مشهد', 7)
SET IDENTITY_INSERT [hier].[Distribution] OFF
/****** Object:  Table [hier].[Area]    Script Date: 04/05/2020 09:26:10 ******/
SET IDENTITY_INSERT [hier].[Area] ON
INSERT [hier].[Area] ([AreaId], [Name], [DistributionID]) VALUES (2, N'امور برق ناحیه 1', 2)
INSERT [hier].[Area] ([AreaId], [Name], [DistributionID]) VALUES (3, N'امور برق رضویه', 2)
SET IDENTITY_INSERT [hier].[Area] OFF
/****** Object:  Table [hier].[Station]    Script Date: 04/05/2020 09:26:10 ******/
SET IDENTITY_INSERT [hier].[Station] ON
INSERT [hier].[Station] ([StationId], [Name], [AreaID]) VALUES (1, N'نیروگاه chp شهرک صنعتی چرمشهر', 3)
SET IDENTITY_INSERT [hier].[Station] OFF
/****** Object:  Table [hier].[Unit]    Script Date: 04/05/2020 09:26:10 ******/
SET IDENTITY_INSERT [hier].[Unit] ON
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (1, N'Engine 01', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (2, N'Engine 02', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (3, N'Engine 03', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (4, N'Engine 04', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (5, N'Engine 05', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (6, N'Engine 06', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (7, N'Engine 07', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (8, N'Engine 08', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (9, N'Engine 09', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (10, N'Engine 10', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (11, N'Engine 11', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (12, N'Engine 12', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (13, N'Engine 13', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (14, N'Engine 14', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (15, N'Engine 15', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (16, N'Engine 16', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (17, N'Engine 17', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (18, N'Engine 18', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (19, N'Engine 19', 1)
INSERT [hier].[Unit] ([UnitId], [Name], [StationID]) VALUES (20, N'Engine 20', 1)
SET IDENTITY_INSERT [hier].[Unit] OFF
