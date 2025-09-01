"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal, User, Calendar, FileText, Phone, MapPin } from "lucide-react"

export function PatientList() {
  const [searchTerm, setSearchTerm] = useState("")

  const patients = [
    {
      id: 1,
      name: "María González",
      age: 65,
      room: "201A",
      diagnosis: "Infección urinaria",
      status: "active",
      lastNote: "2 horas",
      phone: "+34 666 123 456",
      notes: 3,
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      age: 45,
      room: "105B",
      diagnosis: "Post-operatorio",
      status: "monitoring",
      lastNote: "4 horas",
      phone: "+34 666 789 012",
      notes: 7,
    },
    {
      id: 3,
      name: "Elena Morales",
      age: 72,
      room: "303C",
      diagnosis: "Retención urinaria",
      status: "active",
      lastNote: "1 hora",
      phone: "+34 666 345 678",
      notes: 5,
    },
    {
      id: 4,
      name: "José Fernández",
      age: 58,
      room: "208A",
      diagnosis: "Control rutinario",
      status: "stable",
      lastNote: "6 horas",
      phone: "+34 666 901 234",
      notes: 2,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-chart-4 text-white"
      case "monitoring":
        return "bg-secondary text-secondary-foreground"
      case "stable":
        return "bg-chart-3 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Activo"
      case "monitoring":
        return "Monitoreo"
      case "stable":
        return "Estable"
      default:
        return "Desconocido"
    }
  }

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.room.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar pacientes por nombre, diagnóstico o habitación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Patient Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      <AvatarInitials name={patient.name} />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-card-foreground">{patient.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span>{patient.age} años</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Hab. {patient.room}
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(patient.status)}>{getStatusText(patient.status)}</Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-card-foreground">Diagnóstico:</p>
                <p className="text-sm text-muted-foreground">{patient.diagnosis}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Phone className="h-3 w-3" />
                  {patient.phone}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <FileText className="h-3 w-3" />
                  {patient.notes} notas
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  Última nota: {patient.lastNote}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver Historial
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Nueva Nota
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">No se encontraron pacientes que coincidan con la búsqueda</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
