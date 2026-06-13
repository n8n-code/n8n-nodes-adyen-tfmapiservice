import type { INodeProperties } from 'n8n-workflow';

export const generalDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					]
				}
			},
			"options": [
				{
					"name": "Post Assign Terminals",
					"value": "Post Assign Terminals",
					"action": "Assign terminals",
					"description": "Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/assignTerminals"
						}
					}
				},
				{
					"name": "Post Find Terminal",
					"value": "Post Find Terminal",
					"action": "Get the account or store of a terminal",
					"description": "Returns the company account, merchant account, or store that a payment terminal is assigned to.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/findTerminal"
						}
					}
				},
				{
					"name": "Post Get Stores Under Account",
					"value": "Post Get Stores Under Account",
					"action": "Get the stores of an account",
					"description": "Returns a list of stores associated with a company account or a merchant account, including the status of each store.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getStoresUnderAccount"
						}
					}
				},
				{
					"name": "Post Get Terminal Details",
					"value": "Post Get Terminal Details",
					"action": "Get the details of a terminal",
					"description": "Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getTerminalDetails"
						}
					}
				},
				{
					"name": "Post Get Terminals Under Account",
					"value": "Post Get Terminals Under Account",
					"action": "Get the list of terminals",
					"description": "Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getTerminalsUnderAccount"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /assignTerminals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Assign Terminals"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Company Account",
			"name": "companyAccount",
			"type": "string",
			"default": "",
			"description": "Your company account. To return terminals to the company inventory, specify only this parameter and the `terminals`.",
			"routing": {
				"send": {
					"property": "companyAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Assign Terminals"
					]
				}
			}
		},
		{
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "Name of the merchant account. Specify this parameter to assign terminals to this merchant account or to a store under this merchant account.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Assign Terminals"
					]
				}
			}
		},
		{
			"displayName": "Merchant Inventory",
			"name": "merchantInventory",
			"type": "boolean",
			"default": true,
			"description": "Boolean that indicates if you are assigning the terminals to the merchant inventory. Do not use when assigning terminals to a store. Required when assigning the terminal to a merchant account.\n\n- Set this to **true** to assign the terminals to the merchant inventory. This also means that the terminals cannot be boarded.\n\n- Set this to **false** to assign the terminals to the merchant account as in-store terminals. This makes the terminals ready to be boarded and to process payments through the specified merchant account.",
			"routing": {
				"send": {
					"property": "merchantInventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Assign Terminals"
					]
				}
			}
		},
		{
			"displayName": "Store",
			"name": "store",
			"type": "string",
			"default": "",
			"description": "The store code of the store that you want to assign the terminals to.",
			"routing": {
				"send": {
					"property": "store",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Assign Terminals"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Terminals",
			"name": "terminals",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array containing a list of terminal IDs that you want to assign or reassign to the merchant account or store, or that you want to return to the company inventory.\n\nFor example, `[\"V400m-324689776\",\"P400Plus-329127412\"]`.",
			"routing": {
				"send": {
					"property": "terminals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Assign Terminals"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Assign Terminals"
					]
				}
			}
		},
		{
			"displayName": "POST /findTerminal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Find Terminal"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Terminal",
			"name": "terminal",
			"type": "string",
			"default": "",
			"description": "The unique terminal ID in the format `[Device model]-[Serial number]`. \n\nFor example, **V400m-324689776**.",
			"routing": {
				"send": {
					"property": "terminal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Find Terminal"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Find Terminal"
					]
				}
			}
		},
		{
			"displayName": "POST /getStoresUnderAccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Stores Under Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Company Account",
			"name": "companyAccount",
			"type": "string",
			"default": "",
			"description": "The company account. If you only specify this parameter, the response includes the stores of all merchant accounts that are associated with the company account.",
			"routing": {
				"send": {
					"property": "companyAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Stores Under Account"
					]
				}
			}
		},
		{
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account. With this parameter, the response only includes the stores of the specified merchant account.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Stores Under Account"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Stores Under Account"
					]
				}
			}
		},
		{
			"displayName": "POST /getTerminalDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminal Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Terminal",
			"name": "terminal",
			"type": "string",
			"default": "",
			"description": "The unique terminal ID in the format `[Device model]-[Serial number]`. \n\nFor example, **V400m-324689776**.",
			"routing": {
				"send": {
					"property": "terminal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminal Details"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminal Details"
					]
				}
			}
		},
		{
			"displayName": "POST /getTerminalsUnderAccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminals Under Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Company Account",
			"name": "companyAccount",
			"type": "string",
			"default": "",
			"description": "Your company account. If you only specify this parameter, the response includes all terminals at all account levels.",
			"routing": {
				"send": {
					"property": "companyAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminals Under Account"
					]
				}
			}
		},
		{
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account. This is required if you are retrieving the terminals assigned to a store.If you don't specify a `store` the response includes the terminals assigned to the specified merchant account and the terminals assigned to the stores under this merchant account.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminals Under Account"
					]
				}
			}
		},
		{
			"displayName": "Store",
			"name": "store",
			"type": "string",
			"default": "",
			"description": "The store code of the store. With this parameter, the response only includes the terminals assigned to the specified store.",
			"routing": {
				"send": {
					"property": "store",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminals Under Account"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Get Terminals Under Account"
					]
				}
			}
		},
];
