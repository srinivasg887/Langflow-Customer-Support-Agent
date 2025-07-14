#!/bin/bash

echo "🚀 Starting Approval Workflow Application..."
echo ""
echo "📁 File location: $(pwd)/index.html"
echo ""
echo "🌐 Available URLs:"
echo "   • http://localhost:3000"
echo "   • http://127.0.0.1:3000" 
echo "   • http://$(hostname -I | awk '{print $1}'):3000"
echo ""
echo "💡 If URLs don't work, open index.html directly in your browser"
echo ""

# Start server
python3 -m http.server 3000