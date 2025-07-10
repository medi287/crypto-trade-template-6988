
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Plus, Upload, Scale, Building, Users, Download, Eye, Calendar, Newspaper, Video, FileTextIcon } from 'lucide-react';

export function LibraryTabs() {
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

  const ouvrages = [
    {
      id: 1,
      title: "Droit constitutionnel algérien",
      author: "Pr. Ahmed Mahiou",
      publisher: "OPU",
      year: "2023",
      pages: 450,
      category: "Droit public",
      description: "Analyse approfondie du système constitutionnel algérien"
    },
    {
      id: 2,
      title: "Code civil commenté",
      author: "Dr. Fatima Zohra Saidani",
      publisher: "Dar El Houda",
      year: "2022",
      pages: 680,
      category: "Droit civil",
      description: "Commentaires détaillés du code civil algérien"
    }
  ];

  const revues = [
    {
      id: 1,
      title: "Revue Algérienne de Droit",
      issue: "N° 58 - 2024",
      publisher: "Faculté de Droit d'Alger",
      articles: 12,
      category: "Revue académique",
      description: "Articles de recherche en droit algérien"
    },
    {
      id: 2,
      title: "Revue de Jurisprudence",
      issue: "N° 45 - 2024",
      publisher: "Cour Suprême",
      articles: 8,
      category: "Jurisprudence",
      description: "Analyse des décisions de justice récentes"
    }
  ];

  const journaux = [
    {
      id: 1,
      title: "Journal Officiel de la République Algérienne",
      date: "15 Janvier 2024",
      number: "N° 03",
      pages: 24,
      category: "Officiel",
      description: "Textes législatifs et réglementaires"
    },
    {
      id: 2,
      title: "El Moudjahid - Supplément Juridique",
      date: "10 Janvier 2024",
      number: "N° 18456",
      pages: 8,
      category: "Presse",
      description: "Actualités juridiques et analyses"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "La réforme du code de procédure civile",
      author: "Dr. Karim Benali",
      journal: "Revue Algérienne de Droit",
      year: "2024",
      pages: "45-67",
      category: "Procédure",
      description: "Analyse des modifications récentes"
    },
    {
      id: 2,
      title: "L'évolution du droit des affaires en Algérie",
      author: "Pr. Amina Boucherit",
      journal: "Cahiers Juridiques",
      year: "2023",
      pages: "123-145",
      category: "Droit des affaires",
      description: "Étude comparative et prospective"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Conférence sur la Constitution algérienne",
      speaker: "Pr. Mohamed Bedjaoui",
      duration: "1h 45min",
      date: "12 Décembre 2023",
      category: "Conférence",
      description: "Analyse constitutionnelle approfondie"
    },
    {
      id: 2,
      title: "Formation en droit commercial",
      speaker: "Dr. Sarah Hamdi",
      duration: "2h 30min",
      date: "08 Novembre 2023",
      category: "Formation",
      description: "Aspects pratiques du droit commercial"
    }
  ];

  return (
    <Tabs defaultValue="ouvrages" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="ouvrages">Ouvrages</TabsTrigger>
        <TabsTrigger value="revues">Revues</TabsTrigger>
        <TabsTrigger value="journaux">Journaux</TabsTrigger>
        <TabsTrigger value="articles">Articles</TabsTrigger>
        <TabsTrigger value="videos">Vidéos</TabsTrigger>
      </TabsList>
      
      <TabsContent value="ouvrages" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ouvrages.map((ouvrage) => (
            <Card key={ouvrage.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{ouvrage.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Par {ouvrage.author}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{ouvrage.category}</Badge>
                      <Badge variant="secondary">{ouvrage.year}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{ouvrage.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{ouvrage.publisher}</span>
                  <span>{ouvrage.pages} pages</span>
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

      <TabsContent value="revues" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {revues.map((revue) => (
            <Card key={revue.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{revue.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{revue.issue}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{revue.category}</Badge>
                      <Badge variant="secondary">{revue.articles} articles</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{revue.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{revue.publisher}</span>
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

      <TabsContent value="journaux" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {journaux.map((journal) => (
            <Card key={journal.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Newspaper className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{journal.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{journal.date}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{journal.category}</Badge>
                      <Badge variant="secondary">{journal.number}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{journal.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{journal.pages} pages</span>
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

      <TabsContent value="articles" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 gap-4">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <FileTextIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Par {article.author}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <Badge variant="secondary">{article.year}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{article.journal}</span>
                  <span>Pages {article.pages}</span>
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

      <TabsContent value="videos" className="mt-6 space-y-6">
        <ActionButtons />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((video) => (
            <Card key={video.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Video className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Par {video.speaker}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{video.category}</Badge>
                      <Badge variant="secondary">{video.duration}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{video.date}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Regarder
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
    </Tabs>
  );
}
