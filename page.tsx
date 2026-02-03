'use client';

import React, { useState } from 'react';
import { Plus, Search, Wrench, Home, Phone, Mail, MapPin, Calendar, DollarSign, Zap, AlertCircle, CheckCircle, Clock, Edit2, Trash2, Save, X, LayoutDashboard, Users, Tag, TrendingUp, AlertTriangle, Battery, Car } from 'lucide-react';

export default function EVChargerCRM() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John & Sarah Mitchell",
      address: "142 Maple Street, Portland, OR 97201",
      phone: "(503) 555-0123",
      email: "jmitchell@email.com",
      chargerType: "Level 2 Wall-Mounted",
      chargerBrand: "ChargePoint Home Flex",
      amperage: "40A",
      voltage: "240V",
      installDate: "2024-01-15",
      lastService: "2024-11-20",
      nextService: "2025-05-20",
      warrantyExpires: "2027-01-15",
      status: "Active",
      propertyType: "Single Family",
      leadSource: "Referral",
      priority: "Standard",
      tags: ["Repeat Customer", "Tesla Owner"],
      estimatedValue: "$2,500",
      vehicleMake: "Tesla Model 3",
      notes: "Customer prefers morning appointments. Panel upgrade required."
    },
    {
      id: 2,
      name: "Robert Chen",
      address: "87 Oak Avenue, Portland, OR 97208",
      phone: "(503) 555-0456",
      email: "rchen@email.com",
      chargerType: "Level 2 Pedestal",
      chargerBrand: "JuiceBox Pro 40",
      amperage: "40A",
      voltage: "240V",
      installDate: "2023-09-10",
      lastService: "2024-09-10",
      nextService: "2025-03-10",
      warrantyExpires: "2026-09-10",
      status: "Service Due",
      propertyType: "Commercial",
      leadSource: "Google Ads",
      priority: "High",
      tags: ["Commercial Fleet", "Multi-Unit"],
      estimatedValue: "$8,500",
      vehicleMake: "Chevy Bolt",
      notes: "Office building - 4 charger installation. Requires electrician coordination."
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      address: "256 Pine Street, Portland, OR 97214",
      phone: "(503) 555-0789",
      email: "mrodriguez@email.com",
      chargerType: "Level 2 Wall-Mounted",
      chargerBrand: "Grizzl-E Classic",
      amperage: "32A",
      voltage: "240V",
      installDate: "",
      lastService: "",
      nextService: "",
      warrantyExpires: "",
      status: "Quote Sent",
      propertyType: "Condo",
      leadSource: "Facebook",
      priority: "Hot Lead",
      tags: ["First Time EV Buyer", "HOA Approval Needed"],
      estimatedValue: "$1,800",
      vehicleMake: "Nissan Leaf",
      notes: "Waiting for HOA approval. Needs 50ft cable run from panel."
    },
    {
      id: 4,
      name: "David & Linda Wong",
      address: "89 Birch Lane, Portland, OR 97202",
      phone: "(503) 555-0321",
      email: "dwong@email.com",
      chargerType: "Level 2 Wall-Mounted",
      chargerBrand: "Tesla Wall Connector",
      amperage: "48A",
      voltage: "240V",
      installDate: "2024-12-10",
      lastService: "",
      nextService: "2025-06-10",
      warrantyExpires: "2028-12-10",
      status: "Active",
      propertyType: "Single Family",
      leadSource: "Website",
      priority: "Standard",
      tags: ["New Construction", "Smart Home Integration"],
      estimatedValue: "$2,200",
      vehicleMake: "Tesla Model Y",
      notes: "Recently completed installation. WiFi-enabled charger with load management."
    },
    {
      id: 5,
      name: "James Patterson",
      address: "1423 Cedar Drive, Portland, OR 97211",
      phone: "(503) 555-0654",
      email: "",
      chargerType: "DC Fast Charger",
      chargerBrand: "ABB Terra",
      amperage: "200A",
      voltage: "480V",
      installDate: "2022-03-20",
      lastService: "2024-08-15",
      nextService: "2025-02-15",
      warrantyExpires: "2027-03-20",
      status: "Service Due",
      propertyType: "Commercial",
      leadSource: "Referral",
      priority: "Standard",
      tags: ["Annual Maintenance Plan", "Public Access"],
      estimatedValue: "$850",
      vehicleMake: "Multiple Vehicles",
      notes: "Quarterly maintenance contract. Shopping center location. Network connectivity issues."
    },
    {
      id: 6,
      name: "Emily Thompson",
      address: "67 Elm Court, Portland, OR 97206",
      phone: "(503) 555-0987",
      email: "ethompson@email.com",
      chargerType: "Level 2 Wall-Mounted",
      chargerBrand: "",
      amperage: "",
      voltage: "240V",
      installDate: "",
      lastService: "",
      nextService: "",
      warrantyExpires: "",
      status: "Lead",
      propertyType: "Single Family",
      leadSource: "Dealership Referral",
      priority: "Hot Lead",
      tags: ["First Time EV Buyer", "Panel Upgrade Required"],
      estimatedValue: "$3,500",
      vehicleMake: "Ford F-150 Lightning",
      notes: "Just purchased truck. 100A panel upgrade needed + charger installation."
    },
    {
      id: 7,
      name: "Michael Anderson",
      address: "234 Oak Ridge Road, Portland, OR 97219",
      phone: "(503) 555-0234",
      email: "manderson@email.com",
      chargerType: "Level 2 Dual-Port",
      chargerBrand: "ClipperCreek HCS-D40P",
      amperage: "32A",
      voltage: "240V",
      installDate: "2024-06-12",
      lastService: "",
      nextService: "2025-06-12",
      warrantyExpires: "2027-06-12",
      status: "Active",
      propertyType: "Multi-Family",
      leadSource: "Website",
      priority: "Standard",
      tags: ["Dual Vehicle", "Apartment Complex"],
      estimatedValue: "$3,200",
      vehicleMake: "Rivian R1T & Audi e-tron",
      notes: "Installed dual-port charger for 2 EVs. Load sharing capability."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    chargerType: 'Level 2 Wall-Mounted',
    chargerBrand: '',
    amperage: '',
    voltage: '240V',
    installDate: '',
    lastService: '',
    nextService: '',
    warrantyExpires: '',
    status: 'Lead',
    propertyType: 'Single Family',
    leadSource: 'Referral',
    priority: 'Standard',
    tags: [] as string[],
    estimatedValue: '',
    vehicleMake: '',
    notes: ''
  });

  const chargerTypes = [
    'Level 2 Wall-Mounted',
    'Level 2 Pedestal',
    'Level 2 Dual-Port',
    'DC Fast Charger',
    'Portable Level 2'
  ];

  const propertyTypes = [
    'Single Family',
    'Multi-Family',
    'Condo',
    'Townhouse',
    'Commercial',
    'Workplace',
    'Public Parking',
    'New Construction'
  ];

  const leadSources = [
    'Referral',
    'Website',
    'Google Ads',
    'Facebook',
    'Dealership Referral',
    'EV Manufacturer',
    'Trade Show',
    'Utility Program',
    'Direct Mail'
  ];

  const priorityLevels = [
    'Hot Lead',
    'High',
    'Standard',
    'Low'
  ];

  const availableTags = [
    'First Time EV Buyer',
    'Repeat Customer',
    'Tax Rebate Eligible',
    'Utility Rebate',
    'Tesla Owner',
    'Commercial Fleet',
    'Panel Upgrade Required',
    'Smart Home Integration',
    'Annual Maintenance Plan',
    'Multi-Unit',
    'HOA Approval Needed',
    'Public Access',
    'Dual Vehicle',
    'Load Management',
    'VIP'
  ];

  const statusColors: Record<string, string> = {
    'Lead': 'bg-blue-100 text-blue-800',
    'Quote Sent': 'bg-purple-100 text-purple-800',
    'Active': 'bg-green-100 text-green-800',
    'Service Due': 'bg-yellow-100 text-yellow-800',
    'Inactive': 'bg-gray-100 text-gray-800'
  };

  const priorityColors: Record<string, string> = {
    'Hot Lead': 'bg-red-100 text-red-800',
    'High': 'bg-orange-100 text-orange-800',
    'Standard': 'bg-blue-100 text-blue-800',
    'Low': 'bg-gray-100 text-gray-800'
  };

  const statusOptions = ['Lead', 'Quote Sent', 'Active', 'Service Due', 'Inactive'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagToggle = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setCustomers(customers.map(c => c.id === editingId ? { ...formData, id: editingId } : c));
      setEditingId(null);
    } else {
      setCustomers([...customers, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      chargerType: 'Level 2 Wall-Mounted',
      chargerBrand: '',
      amperage: '',
      voltage: '240V',
      installDate: '',
      lastService: '',
      nextService: '',
      warrantyExpires: '',
      status: 'Lead',
      propertyType: 'Single Family',
      leadSource: 'Referral',
      priority: 'Standard',
      tags: [],
      estimatedValue: '',
      vehicleMake: '',
      notes: ''
    });
    setShowAddForm(false);
    setEditingId(null);
  };

  const handleEdit = (customer: any) => {
    setFormData(customer);
    setEditingId(customer.id);
    setShowAddForm(true);
    setSelectedCustomer(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(c => c.id !== id));
      if (selectedCustomer?.id === id) setSelectedCustomer(null);
    }
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.chargerType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.chargerBrand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.vehicleMake.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dashboard Stats
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === 'Active').length;
  const serviceDue = customers.filter(c => c.status === 'Service Due').length;
  const hotLeads = customers.filter(c => c.priority === 'Hot Lead' && (c.status === 'Lead' || c.status === 'Quote Sent')).length;
  const totalEstimatedValue = customers
    .filter(c => c.estimatedValue)
    .reduce((sum, c) => sum + parseFloat(c.estimatedValue.replace(/[$,]/g, '') || '0'), 0);
  
  const statusBreakdown = statusOptions.map(status => ({
    status,
    count: customers.filter(c => c.status === status).length
  }));

  const chargerTypeBreakdown = chargerTypes.map(type => ({
    type,
    count: customers.filter(c => c.chargerType === type).length
  })).filter(item => item.count > 0);

  const upcomingServices = customers
    .filter(c => c.nextService)
    .sort((a, b) => new Date(a.nextService).getTime() - new Date(b.nextService).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">EVCharge Pro CRM</h1>
                <p className="text-emerald-100 text-sm">EV Charger Installation & Service Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                    currentView === 'dashboard' 
                      ? 'bg-white text-emerald-600' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
                <button
                  onClick={() => setCurrentView('customers')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                    currentView === 'customers' 
                      ? 'bg-white text-emerald-600' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Customers
                </button>
              </div>
              {currentView === 'customers' && (
                <button
                  onClick={() => {
                    resetForm();
                    setShowAddForm(true);
                  }}
                  className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  New Customer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'dashboard' ? (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{totalCustomers}</span>
                </div>
                <h3 className="text-gray-600 font-medium">Total Customers</h3>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Battery className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{activeCustomers}</span>
                </div>
                <h3 className="text-gray-600 font-medium">Active Chargers</h3>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{serviceDue}</span>
                </div>
                <h3 className="text-gray-600 font-medium">Service Due</h3>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{hotLeads}</span>
                </div>
                <h3 className="text-gray-600 font-medium">Hot Leads</h3>
              </div>
            </div>

            {/* Pipeline Value */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-green-100 mb-1">Total Pipeline Value</h3>
                  <p className="text-4xl font-bold">${totalEstimatedValue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-16 h-16 text-white/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Status Breakdown */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-emerald-600" />
                  Customer Status
                </h3>
                <div className="space-y-3">
                  {statusBreakdown.map(item => (
                    <div key={item.status} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[item.status]}`}>
                          {item.status}
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-gray-700">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Charger Types */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  Charger Types Installed
                </h3>
                <div className="space-y-3">
                  {chargerTypeBreakdown.map(item => (
                    <div key={item.type} className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">{item.type}</span>
                      <span className="text-xl font-bold text-emerald-600">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Services */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                Upcoming Services
              </h3>
              {upcomingServices.length > 0 ? (
                <div className="space-y-3">
                  {upcomingServices.map(customer => (
                    <div 
                      key={customer.id} 
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setCurrentView('customers');
                        setSelectedCustomer(customer);
                      }}
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">{customer.name}</h4>
                        <p className="text-sm text-gray-600">{customer.chargerBrand} {customer.chargerType}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {new Date(customer.nextService).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          {Math.ceil((new Date(customer.nextService).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No upcoming services scheduled</p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    setCurrentView('customers');
                    resetForm();
                    setShowAddForm(true);
                  }}
                  className="p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors text-left"
                >
                  <Plus className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Add Customer</h4>
                  <p className="text-sm text-gray-600">Create new customer record</p>
                </button>
                <button
                  onClick={() => {
                    setCurrentView('customers');
                    setSearchTerm('Service Due');
                  }}
                  className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-left"
                >
                  <AlertCircle className="w-6 h-6 text-yellow-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Service Due</h4>
                  <p className="text-sm text-gray-600">View chargers needing service</p>
                </button>
                <button
                  onClick={() => {
                    setCurrentView('customers');
                    setSearchTerm('Hot Lead');
                  }}
                  className="p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-left"
                >
                  <TrendingUp className="w-6 h-6 text-red-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Hot Leads</h4>
                  <p className="text-sm text-gray-600">Follow up on priority leads</p>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Customer List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search customers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {filteredCustomers.map(customer => (
                    <div
                      key={customer.id}
                      onClick={() => setSelectedCustomer(customer)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedCustomer?.id === customer.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[customer.status]}`}>
                          {customer.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                        <Home className="w-3 h-3" />
                        {customer.address.split(',')[0]}
                      </p>
                      <p className="text-sm text-emerald-600 font-medium flex items-center gap-1 mb-2">
                        <Zap className="w-3 h-3" />
                        {customer.chargerBrand || customer.chargerType}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[customer.priority]}`}>
                          {customer.priority}
                        </span>
                        {customer.estimatedValue && (
                          <span className="text-xs font-semibold text-green-600">
                            {customer.estimatedValue}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content area - form or customer details */}
            <div className="lg:col-span-2">
              {showAddForm ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <Wrench className="w-6 h-6 text-emerald-600" />
                      {editingId ? 'Edit Customer' : 'Add New Customer'}
                    </h2>
                    <button
                      onClick={resetForm}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Customer Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Installation Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Vehicle Make/Model
                        </label>
                        <input
                          type="text"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleInputChange}
                          placeholder="e.g., Tesla Model 3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Charger Type *
                        </label>
                        <select
                          name="chargerType"
                          value={formData.chargerType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          {chargerTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Brand/Model
                        </label>
                        <input
                          type="text"
                          name="chargerBrand"
                          value={formData.chargerBrand}
                          onChange={handleInputChange}
                          placeholder="e.g., ChargePoint, JuiceBox"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Status
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          {statusOptions.map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Priority
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          {priorityLevels.map(priority => (
                            <option key={priority} value={priority}>{priority}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Estimated Value
                        </label>
                        <input
                          type="text"
                          name="estimatedValue"
                          value={formData.estimatedValue}
                          onChange={handleInputChange}
                          placeholder="$2,500"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tags
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {availableTags.map(tag => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => handleTagToggle(tag)}
                              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                formData.tags.includes(tag)
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Notes
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Panel upgrades, customer preferences, HOA requirements..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        {editingId ? 'Update Customer' : 'Add Customer'}
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              ) : selectedCustomer ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCustomer.name}</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(selectedCustomer)}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(selectedCustomer.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Contact Information
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            {selectedCustomer.phone}
                          </p>
                          {selectedCustomer.email && (
                            <p className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-400" />
                              {selectedCustomer.email}
                            </p>
                          )}
                          <p className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                            {selectedCustomer.address}
                          </p>
                        </div>
                      </div>

                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Charger Details
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Type:</span> {selectedCustomer.chargerType}</p>
                          <p><span className="font-medium">Brand:</span> {selectedCustomer.chargerBrand}</p>
                          <p><span className="font-medium">Amperage:</span> {selectedCustomer.amperage}</p>
                          <p><span className="font-medium">Voltage:</span> {selectedCustomer.voltage}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <Car className="w-4 h-4" />
                          Vehicle
                        </h3>
                        <p className="text-sm">{selectedCustomer.vehicleMake}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Status & Priority
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium text-gray-600">Status: </span>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[selectedCustomer.status]}`}>
                              {selectedCustomer.status}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Priority: </span>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${priorityColors[selectedCustomer.priority]}`}>
                              {selectedCustomer.priority}
                            </span>
                          </div>
                        </div>
                      </div>

                      {selectedCustomer.tags && selectedCustomer.tags.length > 0 && (
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            Tags
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedCustomer.tags.map((tag: string) => (
                              <span key={tag} className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {selectedCustomer.notes && (
                      <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-2">Notes</h3>
                        <p className="text-sm text-gray-600 whitespace-pre-wrap">{selectedCustomer.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Welcome to EVCharge Pro CRM
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Select a customer from the list to view their details, or add a new customer to get started.
                    </p>
                    <button
                      onClick={() => setShowAddForm(true)}
                      className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      Add Your First Customer
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
