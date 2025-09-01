"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, BarChart3, TrendingUp, Users, Activity, Clock } from "lucide-react"

export function ReportsView() {
  const reports = [
    {
      id: 1,
      title: "Reporte Diario de Procedimientos",
      description: "Resumen de todas las notas registradas hoy",
      date: "2024-01-15",
      type: "daily",
      count: 28,
      status: "ready",
    },
    {
      id: 2,
      title: "Análisis Semanal de Sondas Vesicales",
      description: "Estadísticas de colocación de sondas vesicales",
      date: "2024-01-08 - 2024-01-14",
      type: "weekly",
      count: 156,
      status: "ready",
    },
    {
      id: 3,
      title: "Reporte Mensual de Calidad",
      description: "Indicadores de calidad en procedimientos",
      date: "Diciembre 2023",
      type: "monthly",
      count: 642,
      status: "generating",
    },
    {
      id: 4,
      title: "Seguimiento de Pacientes",
      description: "Estado actual de todos los pacientes activos",
      date: "2024-01-15",
      type: "patients",
      count: 45,
      status: "ready",
    },
  ]

  const stats = [
    {
      title: "Procedimientos Hoy",
      value: "28",
      change: "+12%",
      trend: "up",
      icon: Activity,
    },
    {
      title: "Tiempo Promedio",
      value: "15 min",
      change: "-5%",
      trend: "down",
      icon: Clock,
    },
    {
      title: "Tasa de Éxito",
      value: "98.5%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Pacientes Activos",
      value: "45",
      change: "+3",
      trend: "up",
      icon: Users,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "daily":
        return "bg-chart-1 text-white"
      case "weekly":
        return "bg-chart-2 text-white"
      case "monthly":
        return "bg-chart-3 text-white"
      case "patients":
        return "bg-chart-4 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getTypeText = (type: string) => {
    switch (type) {
      case "daily":
        return "Diario"
      case "weekly":
        return "Semanal"
      case "monthly":
        return "Mensual"
      case "patients":
        return "Pacientes"
      default:
        return "Otro"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready":
        return "bg-chart-3 text-white"
      case "generating":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "ready":
        return "Listo"
      case "generating":
        return "Generando"
      default:
        return "Pendiente"
    }
  }

  return (
    <div className="space-y-6">
      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                <span className={`${stat.trend === "up" ? "text-chart-3" : "text-chart-4"}`}>{stat.change}</span>
                <span className="text-muted-foreground">vs período anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-card-foreground">Acciones Rápidas</CardTitle>
          <CardDescription>Generar reportes personalizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
              <BarChart3 className="h-6 w-6" />
              <span>Reporte Personalizado</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
              <Calendar className="h-6 w-6" />
              <span>Programar Reporte</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
              <Download className="h-6 w-6" />
              <span>Exportar Datos</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="text-card-foreground">Reportes Disponibles</CardTitle>
          <CardDescription>Reportes generados y listos para descargar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{report.date}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{report.count} registros</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getTypeColor(report.type)}>{getTypeText(report.type)}</Badge>
                  <Badge className={getStatusColor(report.status)}>{getStatusText(report.status)}</Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={report.status !== "ready"}
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Download className="h-4 w-4" />
                    Descargar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
