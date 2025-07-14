// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    // Initialize tab functionality
    initializeTabs();
    
    // Initialize sidebar navigation
    initializeSidebar();
    
    // Initialize action buttons
    initializeActionButtons();
    
    // Initialize table interactions
    initializeTable();
    
    // Initialize responsive behavior
    initializeResponsive();
    
    // Update escalation timer
    updateEscalationTimer();
    
    console.log('Approval Workflow System initialized');
}

// Tab Functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Handle tab content switching
            const tabText = this.textContent.trim();
            updateTabContent(tabText);
        });
    });
}

function updateTabContent(tabName) {
    const tabContent = document.querySelector('.tab-content');
    
    switch(tabName) {
        case 'SOURCE RECORD':
            showSourceRecord();
            break;
        case 'APPROVAL MILESTONES':
            showApprovalMilestones();
            break;
        case 'SYSTEM INFO':
            showSystemInfo();
            break;
    }
}

function showSourceRecord() {
    const tabContent = document.querySelector('.tab-content');
    tabContent.innerHTML = `
        <div class="source-record-content">
            <h3>Source Record Information</h3>
            <div class="record-details">
                <div class="detail-row">
                    <span class="label">Record Type:</span>
                    <span class="value">Create Task</span>
                </div>
                <div class="detail-row">
                    <span class="label">Created By:</span>
                    <span class="value">Billy Hemphill</span>
                </div>
                <div class="detail-row">
                    <span class="label">Creation Date:</span>
                    <span class="value">03/18/2019, 10:40 AM</span>
                </div>
                <div class="detail-row">
                    <span class="label">Department:</span>
                    <span class="value">Operations</span>
                </div>
                <div class="detail-row">
                    <span class="label">Priority:</span>
                    <span class="value">Normal</span>
                </div>
            </div>
        </div>
    `;
}

function showApprovalMilestones() {
    const tabContent = document.querySelector('.tab-content');
    tabContent.innerHTML = `
        <div class="table-controls">
            <button class="table-btn"><i class="fas fa-sync"></i></button>
            <button class="table-btn"><i class="fas fa-th"></i></button>
            <button class="table-btn"><i class="fas fa-sort"></i></button>
            <button class="table-btn table-export"><i class="fas fa-download"></i></button>
        </div>
        <div class="data-table">
            <table>
                <thead>
                    <tr>
                        <th>Step</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Comments</th>
                        <th>Date/Time <i class="fas fa-sort"></i></th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>Pending Approval</td>
                        <td>Approval Initiated</td>
                        <td>Default Approval Process 'Director Approval' (Default) selected</td>
                        <td>03/18/2019, 10:40 AM</td>
                        <td class="user-link">Billy Hemphill</td>
                    </tr>
                </tbody>
            </table>
            <div class="table-footer">
                <span>1 - 1 of 1 items</span>
            </div>
        </div>
    `;
}

function showSystemInfo() {
    const tabContent = document.querySelector('.tab-content');
    tabContent.innerHTML = `
        <div class="system-info-content">
            <h3>System Information</h3>
            <div class="system-details">
                <div class="detail-row">
                    <span class="label">System ID:</span>
                    <span class="value">APR-2019-03-001</span>
                </div>
                <div class="detail-row">
                    <span class="label">Version:</span>
                    <span class="value">1.0</span>
                </div>
                <div class="detail-row">
                    <span class="label">Environment:</span>
                    <span class="value">Production</span>
                </div>
                <div class="detail-row">
                    <span class="label">Last Modified:</span>
                    <span class="value">03/18/2019, 10:40 AM</span>
                </div>
                <div class="detail-row">
                    <span class="label">Database:</span>
                    <span class="value">Oracle 12c</span>
                </div>
                <div class="detail-row">
                    <span class="label">Server:</span>
                    <span class="value">PROD-APP-01</span>
                </div>
            </div>
        </div>
    `;
}

// Sidebar Navigation
function initializeSidebar() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Handle navigation
            const navText = this.querySelector('span').textContent.trim();
            handleNavigation(navText);
        });
    });
}

function handleNavigation(navItem) {
    switch(navItem) {
        case 'My Approvals':
            showNotification('Navigating to My Approvals', 'info');
            break;
        case 'All Approvals':
            showNotification('Navigating to All Approvals', 'info');
            break;
        case 'Admin':
            showNotification('Navigating to Admin Panel', 'info');
            break;
        case 'Recycle Bin':
            showNotification('Navigating to Recycle Bin', 'info');
            break;
    }
}

// Action Buttons
function initializeActionButtons() {
    const approveBtn = document.querySelector('.btn-approve');
    const rejectBtn = document.querySelector('.btn-reject');
    const forwardBtn = document.querySelector('.btn-forward');
    const backBtn = document.querySelector('.btn-back');
    
    if (approveBtn) {
        approveBtn.addEventListener('click', handleApprove);
    }
    
    if (rejectBtn) {
        rejectBtn.addEventListener('click', handleReject);
    }
    
    if (forwardBtn) {
        forwardBtn.addEventListener('click', handleForward);
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', handleBack);
    }
    
    // Initialize all other action buttons
    const actionButtons = document.querySelectorAll('.action-buttons button');
    actionButtons.forEach(button => {
        if (!button.classList.contains('btn-approve') && 
            !button.classList.contains('btn-reject') && 
            !button.classList.contains('btn-forward') && 
            !button.classList.contains('btn-back')) {
            button.addEventListener('click', function() {
                showNotification('Action performed', 'info');
            });
        }
    });
}

function handleApprove() {
    if (confirm('Are you sure you want to approve this request?')) {
        // Update workflow status
        updateWorkflowStatus('approved');
        showNotification('Request approved successfully!', 'success');
        
        // Update UI to reflect approval
        setTimeout(() => {
            updateApprovalUI('approved');
        }, 1000);
    }
}

function handleReject() {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
        updateWorkflowStatus('rejected');
        showNotification('Request rejected: ' + reason, 'error');
        
        // Update UI to reflect rejection
        setTimeout(() => {
            updateApprovalUI('rejected');
        }, 1000);
    }
}

function handleForward() {
    const user = prompt('Enter the username to forward to:');
    if (user) {
        showNotification(`Request forwarded to ${user}`, 'info');
    }
}

function handleBack() {
    if (confirm('Are you sure you want to go back?')) {
        window.history.back();
    }
}

function updateWorkflowStatus(status) {
    const currentStep = document.querySelector('.workflow-step.current');
    const nextStep = currentStep.nextElementSibling;
    
    if (status === 'approved') {
        currentStep.classList.remove('current');
        currentStep.classList.add('completed');
        
        if (nextStep) {
            nextStep.classList.remove('pending');
            nextStep.classList.add('current');
        }
    } else if (status === 'rejected') {
        currentStep.classList.remove('current');
        currentStep.classList.add('rejected');
    }
}

function updateApprovalUI(status) {
    const statusElement = document.querySelector('.detail-row .value');
    if (statusElement && statusElement.textContent === 'Pending Approval') {
        statusElement.textContent = status === 'approved' ? 'Approved' : 'Rejected';
        statusElement.style.color = status === 'approved' ? '#28a745' : '#dc3545';
    }
}

// Table Interactions
function initializeTable() {
    const tableButtons = document.querySelectorAll('.table-btn');
    
    tableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('fa-sync')) {
                refreshTable();
            } else if (icon.classList.contains('fa-download')) {
                exportTable();
            } else if (icon.classList.contains('fa-sort')) {
                sortTable();
            }
        });
    });
    
    // Make table rows clickable
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            this.style.backgroundColor = '#e3f2fd';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
}

function refreshTable() {
    showNotification('Refreshing data...', 'info');
    
    // Simulate loading
    const table = document.querySelector('.data-table table');
    table.style.opacity = '0.5';
    
    setTimeout(() => {
        table.style.opacity = '1';
        showNotification('Data refreshed successfully!', 'success');
    }, 1500);
}

function exportTable() {
    showNotification('Exporting table data...', 'info');
    
    // Simulate export
    setTimeout(() => {
        showNotification('Table exported successfully!', 'success');
    }, 1000);
}

function sortTable() {
    showNotification('Sorting table...', 'info');
}

// Responsive Behavior
function initializeResponsive() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    });
}

// Escalation Timer
function updateEscalationTimer() {
    const escalationText = document.querySelector('.escalation-text');
    if (!escalationText) return;
    
    let days = -289;
    let hours = 23;
    let minutes = 39;
    
    setInterval(() => {
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
                hours = 23;
                days--;
            }
        }
        
        escalationText.innerHTML = `Change Approvers to 'Hosny Ansar' in <strong>${days} Day ${hours} Hour ${minutes} Minute</strong>`;
    }, 60000); // Update every minute
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 1000;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return '#28a745';
        case 'error': return '#dc3545';
        case 'warning': return '#ffc107';
        default: return '#4a90e2';
    }
}

// Utility Functions
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}