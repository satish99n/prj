# see https://www.terraform.io/docs/configuration/outputs.html

output "output_primary_resource_group_id" {
  value = "${azurerm_resource_group.tf_primary_resource_group.id}"
}

output "output_primary_resource_group_name" {
  value = "${azurerm_resource_group.tf_primary_resource_group.name}"
}
