USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[prQry_GetAllUsers]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prQry_GetAllUsers') IS NOT NULL)
  DROP PROCEDURE prQry_GetAllUsers

GO


/****** Object:  StoredProcedure [dbo].[prQry_GetAllUsers]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All Users
-- =============================================
CREATE PROCEDURE [dbo].prQry_GetAllUsers	
AS
BEGIN
	
	
	SET NOCOUNT ON;

	select 
		staff_id as UserId,
		staff_name as UserActualName,
		staff_ms as UserName,
		staff_role as UserRole,
		is_active as IsActive 
	from ft_staff with(nolock)


END
GO





