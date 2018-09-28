USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[[prQry_GetFileStatusMatrix]]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prQry_GetFileStatusMatrix') IS NOT NULL)
  DROP PROCEDURE prQry_GetFileStatusMatrix

GO

/****** Object:  StoredProcedure [dbo].[[prQry_GetFileStatusMatrix]]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All file tracks
-- =============================================
CREATE PROCEDURE [dbo].prQry_GetFileStatusMatrix
	@fileId int
AS
BEGIN
	
	
	SET NOCOUNT ON;

	select f.file_id as FileId,
		fts.status_id as  StatusId,
		fts.workflow_id as WorkflowId,
		fts.exit_code as ExitCode,
		fts.new_status_id as NewStatusId,
		s.status_desc as NewStatusName,
		fts.path_desc as PathDesc
	from ft_file f with(nolock)
	join ft_status_matrix fts with(nolock)
	on f.workflow_id = fts.workflow_id
	join ft_status s with(nolock)
	on fts.new_status_id = s.status_id
	where f.file_id = @fileId



END
GO


