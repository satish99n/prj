USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[prQry_GetAllFileSteps]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prQry_GetAllFileSteps') IS NOT NULL)
  DROP PROCEDURE prQry_GetAllFileSteps

GO


/****** Object:  StoredProcedure [dbo].[prQry_GetAllFileSteps]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All file tracks
-- =============================================
CREATE PROCEDURE [dbo].[prQry_GetAllFileSteps]
	@id int,
	@fileTrackId int
AS
BEGIN
	
	
	SET NOCOUNT ON;

	select  distinct 
		s.status_id as StatusId, 
		s.status_desc as StatusName, 
		s.status_rank as StatusRank,
		fts.modify_user as UserAck,
		fts.complete_dttm as CompletedDate,
		fts.modify_dttm as ModifiedDate,
		fts.create_dttm as CreatedDate,
		fts.ack_dttm as DateAck,
		fts.step_notes as Notes
	from ft_file f with(nolock)
	join ft_status_matrix ftm with(nolock)
	on f.workflow_id = ftm.workflow_id
	join ft_status s with(nolock)
	on ftm.status_id = s.status_id
	left join ft_file_tracker_step fts
	on fts.file_tracker_id = @fileTrackId and ftm.status_id = fts.status_id
	where f.file_id = @id
	order by s.status_rank, s.status_id, s.status_desc

END
GO


