"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { 
  Palette, 
  Image, 
  Share2, 
  Upload,
  Plus,
  Eye,
  Download,
  Star
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center gap-4 border-b px-6 py-4">
        <SidebarTrigger />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Design Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Manage and organize your brand assets, color concepts, and social media designs
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Design
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="brand">Brand Assets</TabsTrigger>
            <TabsTrigger value="colors">Color Concepts</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Designs
                  </CardTitle>
                  <Image className="h-4 w-4 text-muted-foreground" aria-label="Total Designs Icon" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">86</div>
                  <p className="text-xs text-muted-foreground">
                    +12 from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Color Palettes
                  </CardTitle>
                  <Palette className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    +4 new palettes
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Social Graphics
                  </CardTitle>
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">52</div>
                  <p className="text-xs text-muted-foreground">
                    Ready for deployment
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Designs</CardTitle>
                  <CardDescription>
                    Your latest design work and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Brand Logo V3", type: "Logo", status: "In Review" },
                    { name: "Social Media Kit", type: "Social", status: "Complete" },
                    { name: "Color Palette 2024", type: "Colors", status: "Draft" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                      <Badge variant={item.status === "Complete" ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Common design tasks and workflows
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Upload className="h-4 w-4" />
                    Upload New Assets
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Palette className="h-4 w-4" />
                    Create Color Palette
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Share2 className="h-4 w-4" />
                    Generate Social Graphics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="brand" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Brand Assets</h2>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Brand Asset
              </Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { name: "Primary Logo", type: "SVG", size: "2.4 KB", favorite: true },
                { name: "Logo Dark", type: "PNG", size: "45 KB", favorite: false },
                { name: "Logo Light", type: "PNG", size: "42 KB", favorite: false },
                { name: "Brand Mark", type: "SVG", size: "1.8 KB", favorite: true },
                { name: "Logo Horizontal", type: "SVG", size: "3.1 KB", favorite: false },
                { name: "Favicon", type: "ICO", size: "15 KB", favorite: false },
              ].map((asset) => (
                <Card key={asset.name} className="relative group">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <Image className="h-8 w-8 text-muted-foreground" aria-label="Design Asset" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{asset.name}</p>
                        {asset.favorite && <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />}
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{asset.type}</span>
                        <span>{asset.size}</span>
                      </div>
                    </div>
                    <div className="absolute inset-x-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 justify-end">
                      <Button size="sm" variant="secondary" className="h-6 w-6 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-6 w-6 p-0">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="colors" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Color Concepts</h2>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Palette
              </Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Primary Brand Colors",
                  colors: ["#1E40AF", "#3B82F6", "#60A5FA", "#93C5FD"],
                  description: "Main brand color palette"
                },
                {
                  name: "Accent Colors",
                  colors: ["#7C3AED", "#A855F7", "#C084FC", "#DDD6FE"],
                  description: "Supporting accent colors"
                },
                {
                  name: "Neutral Tones",
                  colors: ["#1F2937", "#4B5563", "#9CA3AF", "#F3F4F6"],
                  description: "Text and background colors"
                },
                {
                  name: "Success States",
                  colors: ["#059669", "#10B981", "#34D399", "#A7F3D0"],
                  description: "Success and positive feedback"
                },
                {
                  name: "Warning States",
                  colors: ["#D97706", "#F59E0B", "#FBBF24", "#FEF3C7"],
                  description: "Warning and caution colors"
                },
                {
                  name: "Error States",
                  colors: ["#DC2626", "#EF4444", "#F87171", "#FECACA"],
                  description: "Error and danger colors"
                },
              ].map((palette) => (
                <Card key={palette.name}>
                  <CardHeader>
                    <CardTitle className="text-base">{palette.name}</CardTitle>
                    <CardDescription>{palette.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      {palette.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 rounded-lg border border-border"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Export
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Social Media Graphics</h2>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Graphic
              </Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { name: "Instagram Post 1", platform: "Instagram", size: "1080x1080", status: "Ready" },
                { name: "Facebook Cover", platform: "Facebook", size: "1200x630", status: "Draft" },
                { name: "LinkedIn Header", platform: "LinkedIn", size: "1584x396", status: "Ready" },
                { name: "Twitter Header", platform: "Twitter", size: "1500x500", status: "Review" },
                { name: "Instagram Story", platform: "Instagram", size: "1080x1920", status: "Ready" },
                { name: "YouTube Thumbnail", platform: "YouTube", size: "1280x720", status: "Draft" },
              ].map((graphic) => (
                <Card key={graphic.name}>
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center">
                      <Share2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <p className="font-medium text-sm">{graphic.name}</p>
                        <Badge 
                          variant={graphic.status === "Ready" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {graphic.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{graphic.platform}</p>
                      <p className="text-xs text-muted-foreground">{graphic.size}px</p>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
