USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[[prUpd_UpdateFile]]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prUpd_UpdateFile') IS NOT NULL)
  DROP PROCEDURE prUpd_UpdateFile

GO

/****** Object:  StoredProcedure [dbo].[[prUpd_UpdateFile]]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All file tracks
-- =============================================
CREATE PROCEDURE [dbo].prUpd_UpdateFile
	@id int,
	@fileTrackerId int,
	@priority int = null,
	@businessPriority varchar(100) = null,
	@fileName varchar(500) = null,
	@salesforceId varchar(50) = null,
	@filePath varchar(255) = null,
	@statusId int = null,
	@assignedId int = null,
	@ack datetime = null,
	@notes varchar(4000) = null,
	@exitCode int = null,
	@user varchar(50) = null

AS
BEGIN
	
	
	SET NOCOUNT ON;

	update ft_file_tracker
	set salesforce_id = @salesforceId,
		filepath = @filePath,
		filename = @fileName,
		modify_dttm = getDate(),
		modify_user = @user
	where file_tracker_id = @fileTrackerId

	update ft_file
	set priority = @priority,
		business_priority = @businessPriority,
		modify_dttm = getDate(),
		modify_user = @user
	where FILE_ID = @id

	declare @existingAssignee int
	declare @existingWorkflowId int
	declare @existingStatusId int
	declare @newStatusId int

	select  @existingAssignee = fts.assigned_id,
			@existingStatusId = fts.status_id,
			@existingWorkflowId = f.workflow_id
	from ft_file_tracker ft with(nolock)
	join ft_file f with(nolock)
	on ft.file_id = f.file_id
	join ft_file_tracker_step fts with(nolock)
	on ft.file_tracker_id = fts.file_tracker_id and ft.status_id = fts.status_id
	where ft.file_tracker_id = @fileTrackerId

	if(@existingAssignee is null)
	BEGIN
		
		select @newStatusId = new_status_id 
		from ft_status_matrix with(nolock)
		where status_id = @existingStatusId and workflow_id = @existingWorkflowId and exit_code = @exitCode

		update ft_file_tracker_step
		set ack_dttm = getDate(), modify_user = 'Syed S', step_notes = @notes
		where file_tracker_id = @fileTrackerId and status_id = @existingStatusId

		insert into ft_file_tracker_step(file_tracker_id, status_id, assigned_id, step_dttm, ack_dttm, complete_dttm, step_notes, is_active, elapsed_time, create_user, create_dttm, modify_user, modify_dttm)
		values(@fileTrackerId, @newStatusId, @assignedId, getDate(),null,null,null,'1',null,@user, getDate(), @user, getDate()) 
	
		update ft_file_tracker
		set status_id = @newStatusId
		where file_tracker_id = @fileTrackerId
	END


END
GO


