import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Configure which email notifications you want to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="font-medium">Candidate Updates</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="new-applications">New applications</Label>
                <Switch id="new-applications" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="application-status-changes">Application status changes</Label>
                <Switch id="application-status-changes" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="high-match-candidates">High match candidates (85%+)</Label>
                <Switch id="high-match-candidates" defaultChecked={true} />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="font-medium">Job Updates</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="new-job-postings">New job postings</Label>
                <Switch id="new-job-postings" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="job-status-changes">Job status changes</Label>
                <Switch id="job-status-changes" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="job-expiring">Jobs expiring soon</Label>
                <Switch id="job-expiring" defaultChecked={true} />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="font-medium">Team Activity</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="team-member-comments">Team member comments</Label>
                <Switch id="team-member-comments" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="mentions">Mentions and assignments</Label>
                <Switch id="mentions" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="new-team-members">New team members</Label>
                <Switch id="new-team-members" defaultChecked={false} />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="font-medium">System Notifications</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="product-updates">Product updates and announcements</Label>
                <Switch id="product-updates" defaultChecked={false} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="security-alerts">Security alerts</Label>
                <Switch id="security-alerts" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="billing-notifications">Billing notifications</Label>
                <Switch id="billing-notifications" defaultChecked={true} />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Unsubscribe from All</Button>
          <Button>
            <Check className="mr-2 h-4 w-4" />
            Save Preferences
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Schedule</CardTitle>
          <CardDescription>Configure when you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="font-medium">Email Digest</div>
            <Select defaultValue="daily">
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time (as they happen)</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Digest</SelectItem>
                <SelectItem value="none">Don't send digests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 pt-4">
            <div className="font-medium">Quiet Hours</div>
            <div className="text-sm text-muted-foreground">Pause notifications during specified hours</div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <Label>From</Label>
                <Select defaultValue="18">
                  <SelectTrigger>
                    <SelectValue placeholder="Start time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>To</Label>
                <Select defaultValue="8">
                  <SelectTrigger>
                    <SelectValue placeholder="End time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save Schedule</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

