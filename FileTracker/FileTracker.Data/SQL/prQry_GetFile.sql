USE [CDSM_App]
GO

/****** Object:  StoredProcedure [dbo].[[prQry_GetFile]]    Script Date: 7/28/2018 11:04:43 AM ******/
IF (OBJECT_ID('prQry_GetFile') IS NOT NULL)
  DROP PROCEDURE prQry_GetFile

GO

/****** Object:  StoredProcedure [dbo].[[prQry_GetFile]]    Script Date: 7/28/2018 11:04:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Syed Sheeraz
-- Create date: 7/24/2018
-- Description:	Get All file tracks
-- =============================================
CREATE PROCEDURE [dbo].[prQry_GetFile]
	@fileTrackId int
AS
BEGIN
	
	
	SET NOCOUNT ON;

	select 
		f.file_id as FileId,
		ftracker.file_tracker_id as FileTrackId,
		s.status_id as StatusId,
		s.status_desc as StatusName,
		f.layout_id as LayoutId,
		l.layout_desc as LayoutName,
		f.campaign_id as CampaignId,
		c.campaign_desc as CampaignName,
		f.workflow_id as WorkflowId,
		w.workflow_desc as WorkflowName,
		f.file_type as FileType,
		f.interface_status as InterfaceStatus,
		f.interface_id as InterfaceId,
		f.priority as Priority,
		f.business_priority as BusinessPriority,
		f.db_table as DbTable,
		f.db_table_nophi as DbTableNoPHI,
		f.region as Region,
		f.struct_phase as StructPhase,
		f.ccd_lifecycle_status as CCDLifecycleStatus,
		f.sdm_sub_type as SdmSubType,
		f.hedis_standard as HedisStandard,
		f.interface_id as InterfaceId,
		f.oid_impl as OidImpl,
		f.oid_prod as OidProd,
		f.oid_tenant as OidTentant,
		f.oid_env as OidEnv,
		f.file_source as FileSource,
		ftracker.file_tracker_id as FileTrackerId,
		ftracker.filename as FileName,
		ftracker.salesforce_id as SalesforceId,
		ftracker.filepath as FilePath,
		ftracker.file_size as FileSize,
		ftracker.file_row_cnt as FileRowCount,
		fts.step_dttm as StepDateTime,
		fts.ack_dttm as AckDateTime,
		fts.complete_dttm as CompleteDateTime,
		fts.step_notes as StepNotes,
		fts.elapsed_time as StepElapsedTime,
		fts.create_user as CreateUser,
		fts.create_dttm as CreateDateTime,		
		fts.modify_user as ModifyUser,
		fts.modify_dttm as ModifyDateTime
	from ft_file_tracker ftracker with(nolock)
	join ft_file f with(nolock)
	on ftracker.file_id = f.file_id
	join ft_file_layout l with(nolock)
	on f.layout_id = l.layout_id
	join ft_campaign c with(nolock)
	on f.campaign_id = c.campaign_id
	join ft_workflow w  with(nolock)
	on f.workflow_id = w.workflow_id
	join ft_status s with(nolock)
	on ftracker.status_id = s.status_id
	join ft_file_tracker_step fts with(nolock)
	on ftracker.file_tracker_id = fts.file_tracker_id and ftracker.status_id = fts.status_id
	left join ft_staff assignedStaff with(nolock)
	on fts.assigned_id = assignedStaff.staff_id
	where  ftracker.file_tracker_id = @fileTrackId

END
GO


