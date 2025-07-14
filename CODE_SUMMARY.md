# Code Summary: Langflow Customer Support Agent

## Project Overview
This is a **Customer Support Agent** built using Langflow and Streamlit. The system provides an AI-powered chat interface for handling customer inquiries through a multi-agent architecture.

## Architecture

### Core Components

1. **Streamlit Frontend** (`main.py`)
   - Simple chat interface for user interactions
   - Connects to Langflow API for processing requests
   - Handles authentication via environment token
   - Displays responses in markdown format

2. **Langflow Backend** (`Customer Support.json`)
   - Large configuration file (5,614 lines) defining the workflow
   - Implements the multi-agent system architecture
   - Handles routing and processing of customer requests

3. **Multi-Agent System** (3 specialized agents in `prompts/` directory):
   - **Manager Agent**: Routes requests and coordinates between other agents
   - **FAQ Agent**: Handles frequently asked questions using RAG (Retrieval-Augmented Generation)
   - **Order Lookup Agent**: Manages order inquiries and product information lookup

## Data Sources

### Sample Data Files
- **`sample_orders.csv`**: Contains order information with fields:
  - Order number, customer details, date, price, status, product IDs
  - 6 sample orders from November 2024
  
- **`sample_products.csv`**: Product catalog with:
  - Product ID, name, and description
  - 9 sample tech products (mice, keyboards, chargers, etc.)

- **`Company_FAQ.pdf`**: Knowledge base for FAQ responses

## Agent Capabilities

### Manager Agent
- Acts as the main coordinator and router
- Can access all tools and data sources
- Provides comprehensive customer service management
- Handles complex queries requiring multiple data sources

### FAQ Agent
- Uses Retrieval-Augmented Generation (RAG)
- Accesses company database for accurate information
- Handles general customer inquiries about policies, shipping, returns

### Order Lookup Agent
- Specializes in order management
- Looks up orders by order number
- Retrieves and aggregates product information
- Provides detailed order summaries including product details

## Technical Stack

### Dependencies (`requirements.txt`)
- **`streamlit`**: Web interface framework
- **`requests`**: HTTP client for API calls
- **`python-dotenv`**: Environment variable management

### Configuration
- Uses environment variables for API authentication (`APP_TOKEN`)
- Connects to Langflow via DataStax Astra platform
- RESTful API integration with structured JSON payloads

## Key Features

1. **Multi-Agent Routing**: Intelligent request routing based on query type
2. **Order Management**: Complete order lookup with product aggregation
3. **Knowledge Base Integration**: FAQ system with document retrieval
4. **Real-time Chat**: Streamlit-based conversational interface
5. **Scalable Architecture**: Cloud-based Langflow backend

## Use Cases

- **Order Status Inquiries**: Customers can check order details and status
- **Product Information**: Detailed product specifications and descriptions
- **General Support**: FAQ-style questions about company policies
- **Complex Queries**: Multi-step support requiring multiple data sources

## Security & Authentication
- API token-based authentication
- Environment variable configuration for sensitive data
- Secure HTTPS communication with Langflow platform

This system demonstrates a modern approach to customer support automation, combining conversational AI with structured data access and multi-agent coordination for comprehensive customer service.