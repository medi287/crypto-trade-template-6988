
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Plus, Upload, Scale, Building, Users, Download, Eye, Calendar } from 'lucide-react';

export function LibraryTabs() {
  const exampleResources = [
    {
      id: 1,
      title: "Code Civil Algérien",
      description: "Version consolidée du Code Civil avec les dernières modifications",
      category: "Codes",
      type: "PDF",
      pages: 450,
      lastUpdate: "2024",
      icon: <Scale className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Code de Procédure Civile",
      description: "Procédures civiles et commerciales en vigueur",
      category: "Procédures",
      type: "PDF",
      pages: 320,
      lastUpdate: "2023",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Loi sur l'Investissement 2022",
      description: "Nouvelle loi sur l'investissement et ses décrets d'application",
      category: "Économique",
      type: "Document",
      pages: 85,
      lastUpdate: "2022",
      icon: <Building className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Code du Travail",
      description: "Relations de travail, conventions collectives et sécurité sociale",
      category: "Social",
      type: "PDF",
      pages: 280,
      lastUpdate: "2024",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const ActionButtons = () => (
    <div className="flex gap-3 mb-6">
      <Button className="gap-2">
        <Plus className="w-4 h-4" />
        Ajouter
      </Button>
      <Button variant="outline" className="gap-2">
        <Upload className="w-4 h-4" />
        Enrichir
      </Button>
    </div>
  );

  return (
    <Tabs defaultValue="documents" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="references">Références</TabsTrigger>
        <TabsTrigger value="archives">Archives</TabsTrigger>
        <TabsTrigger value="favoris">Favoris</TabsTrigger>
      </TabsList>
      
      <TabsContent value="documents" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exampleResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{resource.category}</Badge>
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{resource.pages} pages</span>
                  <span>Mis à jour: {resource.lastUpdate}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Consulter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-1" />
                    Télécharger
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="references" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Références juridiques</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h4 className="font-medium">Jurisprudence Cour Suprême</h4>
                    <p className="text-sm text-gray-600">Collection des arrêts 2024</p>
                  </div>
                  <Badge>124 arrêts</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h4 className="font-medium">Doctrine juridique algérienne</h4>
                    <p className="text-sm text-gray-600">Analyses et commentaires</p>
                  </div>
                  <Badge>89 articles</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="archives" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Documents archivés</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h4 className="font-medium">Textes abrogés</h4>
                    <p className="text-sm text-gray-600">Archives des textes modifiés</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2020-2023</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h4 className="font-medium">Versions antérieures</h4>
                    <p className="text-sm text-gray-600">Historique des modifications</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2018-2024</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="favoris" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Documents favoris</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h4 className="font-medium">Code de commerce</h4>
                    <p className="text-sm text-gray-600">Ajouté le 15 jan 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h4 className="font-medium">Loi de finances 2024</h4>
                    <p className="text-sm text-gray-600">Ajouté le 12 jan 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
