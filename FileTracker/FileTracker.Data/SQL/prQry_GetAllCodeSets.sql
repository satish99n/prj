USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[prQry_GetAllCodeSets]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prQry_GetAllCodeSets') IS NOT NULL)
  DROP PROCEDURE prQry_GetAllCodeSets

GO


/****** Object:  StoredProcedure [dbo].[prQry_GetAllCodeSets]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All file tracks
-- =============================================
CREATE PROCEDURE [dbo].[prQry_GetAllCodeSets]
AS
BEGIN
	
	
	SET NOCOUNT ON;

	select 
		Item_Id as ItemId,
		code_set as [Set],
		pos as Pos,
		item_desc as ItemDescription
	from ft_code_set with(nolock)
	order by code_set, pos


END
GO


