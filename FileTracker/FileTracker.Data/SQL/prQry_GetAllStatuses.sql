USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[prQry_GetAllStatuses]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prQry_GetAllStatuses') IS NOT NULL)
  DROP PROCEDURE prQry_GetAllStatuses

GO


/****** Object:  StoredProcedure [dbo].[prQry_GetAllStatuses]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All Statuses
-- =============================================
CREATE PROCEDURE [dbo].prQry_GetAllStatuses	
AS
BEGIN
	
	
	SET NOCOUNT ON;

	select 
		status_id as StatusId,
		status_desc as StatusName,
		status_rank as StatusRank
	from ft_status with(nolock)


END
GO





