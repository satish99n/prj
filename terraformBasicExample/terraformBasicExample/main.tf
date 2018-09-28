provider "azurerm" {
  version = "~> 1.8"
}

provider "random" {
  version = "~> 1.3"
}

resource "azurerm_resource_group" "tf_primary_resource_group" {
  name     = "${var.resource_group_name}"
  location = "${var.resource_group_location}"

  tags {
    environment = "${var.environment_friendly_name}"
  }
}
