# see https://www.terraform.io/docs/configuration/variables.html

variable "resource_group_location" {
  type        = "string"
  description = "Location of the azure resource group."
  default     = "eastus"
}



#note the below variables are DECLARED, but are not given a default value.


variable "resource_group_name" {
  type        = "string"
  description = "Name of the azure resource group."
}

variable "environment_friendly_name" {
  type        = "string"
  description = "Name of Environment."
}
