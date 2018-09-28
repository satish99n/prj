USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[[prQry_GetAllFileTracks]]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prQry_GetAllFileTracks') IS NOT NULL)
  DROP PROCEDURE prQry_GetAllFileTracks

GO

/****** Object:  StoredProcedure [dbo].[[prQry_GetAllFileTracks]]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All file tracks
-- =============================================
CREATE PROCEDURE [dbo].[prQry_GetAllFileTracks]
AS
BEGIN
	
	
	SET NOCOUNT ON;

	select distinct
		f.file_id as FileId,
		ftracker.file_tracker_id as FileTrackId,
		ftracker.modify_dttm,
		fc.campaign_desc as CampaignName,
		fc.campaign_id as CampaignId,
		fw.workflow_desc as WorkflowName,
		fw.workflow_id as WorkflowId,
		fs.status_id as StatusId,
		fs.status_desc as StatusName,
		ftracker.filename as FileName,
		assignedStaff.staff_id as AssigneeId,
		case when assignedStaff.staff_name is null then '-' else assignedStaff.staff_name end as AssigneeName,
		case when assignedStaff.staff_role is null then '-' else assignedStaff.staff_role end as AssigneeRole,
		fs.status_desc as CurrentStep,
		f.priority as Priority,
		f.business_priority as BusinessPriority,
		(select case when (	select top 1 s.complete_dttm from ft_file_tracker_step s
			join ft_file_tracker ft with(nolock)
			on s.file_tracker_id = ft.file_tracker_id
			join ft_file f with(nolock)
			on ft.file_id = f.file_id
			join ft_status_matrix fsm with(nolock)
			on f.workflow_id = fsm.workflow_id
			where ft.file_tracker_id = ftracker.file_tracker_id and fsm.is_term = '1' and s.complete_dttm is not null
		) is not null then 'Complete' else 'Active' end) as Completed
	from ft_file_tracker ftracker with(nolock)
	join ft_file f with(nolock)
	on ftracker.file_id = f.file_id
	join ft_file_layout fl with(nolock)
	on f.layout_id = fl.layout_id
	join ft_campaign fc with(nolock)
	on f.campaign_id = fc.campaign_id
	join ft_workflow fw  with(nolock)
	on f.workflow_id = fw.workflow_id
	join ft_status fs with(nolock)
	on ftracker.status_id = fs.status_id
	join ft_file_tracker_step fts with(nolock)
	on ftracker.file_tracker_id = fts.file_tracker_id and ftracker.status_id = fts.status_id
	left join ft_staff assignedStaff with(nolock)
	on fts.assigned_id = assignedStaff.staff_id
	order by ftracker.modify_dttm desc


END
GO


