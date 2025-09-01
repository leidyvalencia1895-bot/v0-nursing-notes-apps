"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Users,
  Calendar,
  Activity,
  Plus,
  Search,
  Filter,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { CatheterForm } from "./catheter-form"
import { PatientList } from "./patient-list"
import { ReportsView } from "./reports-view"

export function NursingDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showNewForm, setShowNewForm] = useState(false)

  const stats = [
    {
      title: "Notas Pendientes",
      value: "12",
      description: "Requieren atención",
      icon: Clock,
      color: "text-secondary",
    },
    {
      title: "Completadas Hoy",
      value: "28",
      description: "Procedimientos registrados",
      icon: CheckCircle,
      color: "text-chart-3",
    },
    {
      title: "Pacientes Activos",
      value: "45",
      description: "En seguimiento",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Alertas",
      value: "3",
      description: "Requieren revisión",
      icon: AlertCircle,
      color: "text-destructive",
    },
  ]

  const recentNotes = [
    {
      id: 1,
      patient: "María González",
      procedure: "Colocación Sonda Vesical",
      time: "14:30",
      status: "completed",
      nurse: "Ana Martínez",
    },
    {
      id: 2,
      patient: "Carlos Ruiz",
      procedure: "Control de Signos Vitales",
      time: "13:45",
      status: "pending",
      nurse: "Luis Fernández",
    },
    {
      id: 3,
      patient: "Elena Morales",
      procedure: "Administración Medicamentos",
      time: "12:20",
      status: "completed",
      nurse: "Carmen López",
    },
  ]

  if (showNewForm) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-card-foreground">Nueva Nota de Enfermería</h1>
                <p className="text-muted-foreground">Colocación de Sonda Vesical</p>
              </div>
              <Button variant="outline" onClick={() => setShowNewForm(false)}>
                Volver al Dashboard
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-6">
          <CatheterForm onComplete={() => setShowNewForm(false)} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-card-foreground">Sistema de Notas de Enfermería</h1>
              <p className="text-muted-foreground">Gestión integral de procedimientos y documentación médica</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button onClick={() => setShowNewForm(true)} className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Nueva Nota
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="patients" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Pacientes
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Reportes
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendario
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-card-foreground">Actividad Reciente</CardTitle>
                  <CardDescription>Últimas notas registradas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentNotes.map((note) => (
                    <div key={note.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="space-y-1">
                        <p className="font-medium text-card-foreground">{note.patient}</p>
                        <p className="text-sm text-muted-foreground">{note.procedure}</p>
                        <p className="text-xs text-muted-foreground">Por: {note.nurse}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-sm font-medium text-card-foreground">{note.time}</p>
                        <Badge
                          variant={note.status === "completed" ? "default" : "secondary"}
                          className={note.status === "completed" ? "bg-chart-3 text-white" : ""}
                        >
                          {note.status === "completed" ? "Completado" : "Pendiente"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-card-foreground">Acciones Rápidas</CardTitle>
                  <CardDescription>Procedimientos más comunes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => setShowNewForm(true)}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Colocación de Sonda Vesical
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Activity className="h-4 w-4 mr-2" />
                    Control de Signos Vitales
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="h-4 w-4 mr-2" />
                    Administración de Medicamentos
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Generar Reporte Diario
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="patients">
            <PatientList />
          </TabsContent>

          <TabsContent value="reports">
            <ReportsView />
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendario de Procedimientos</CardTitle>
                <CardDescription>Vista de programación y seguimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Vista de calendario en desarrollo</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
