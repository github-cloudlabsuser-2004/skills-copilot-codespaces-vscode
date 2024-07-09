# Define parameters
param(
    [string]$storageAccountName,
    [string]$location = "eastus",
    [string]$resourceGroupName = "myResourceGroup",
    [string]$subscriptionId
)

# Login to Azure
Connect-AzAccount

# Set the subscription
Set-AzContext -SubscriptionId $subscriptionId

# Create a resource group if it doesn't exist
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
    -Name $storageAccountName `
    -Location $location `
    -SkuName "Standard_LRS" `
    -Kind "StorageV2"

# Output the storage account details
$storageAccount | Format-List