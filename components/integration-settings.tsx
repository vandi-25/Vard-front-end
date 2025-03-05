import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { LinkedinIcon, Github, Layout, MessageSquare, FileText } from "lucide-react"

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Connected Services</CardTitle>
          <CardDescription>Manage integrations with external services and job boards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <LinkedinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-muted-foreground">Sync job postings and candidates from LinkedIn</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium text-green-600 dark:text-green-400">Connected</div>
              <Switch defaultChecked={true} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm text-muted-foreground">Pull candidate GitHub profiles and activity data</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium text-green-600 dark:text-green-400">Connected</div>
              <Switch defaultChecked={true} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                <Layout className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <div className="font-medium">Indeed</div>
                <div className="text-sm text-muted-foreground">Post jobs and sync candidates from Indeed</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm">Connect</Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="font-medium">Slack</div>
                <div className="text-sm text-muted-foreground">Receive notifications and collaborate on candidates</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm">Connect</Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <FileText className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <div className="font-medium">Google Drive</div>
                <div className="text-sm text-muted-foreground">Store and access candidate resumes and documents</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm">Connect</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Browse Integration Marketplace
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Access</CardTitle>
          <CardDescription>Manage API keys and webhook configurations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="font-medium">API Keys</div>
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Production API Key</div>
                  <div className="text-sm text-muted-foreground">Created Apr 12, 2023</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Reveal
                  </Button>
                  <Button variant="outline" size="sm">
                    Regenerate
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <div className="font-medium">Webhooks</div>
            <div className="text-sm text-muted-foreground">
              Configure webhooks to receive real-time updates for events
            </div>
            <Button variant="outline" size="sm" className="mt-2">
              Add Webhook Endpoint
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

