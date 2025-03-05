import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Lock, Shield, LogOut } from "lucide-react"

export function AccountSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password to keep your account secure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            <Lock className="mr-2 h-4 w-4" />
            Update Password
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Manage your account security and authentication methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Two-Factor Authentication</div>
              <div className="text-sm text-muted-foreground">Add an extra layer of security to your account</div>
            </div>
            <Switch defaultChecked={true} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Login Notifications</div>
              <div className="text-sm text-muted-foreground">Receive notifications for new logins to your account</div>
            </div>
            <Switch defaultChecked={true} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Session Timeout</div>
              <div className="text-sm text-muted-foreground">Automatically log out after 2 hours of inactivity</div>
            </div>
            <Switch defaultChecked={false} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            <Shield className="mr-2 h-4 w-4" />
            Save Security Settings
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Management</CardTitle>
          <CardDescription>Manage your account data and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Button variant="outline" className="w-full sm:w-auto">
              Download My Data
            </Button>
            <div className="text-xs text-muted-foreground pt-1">
              Request a copy of your personal data in JSON format
            </div>
          </div>

          <div className="pt-4">
            <Button variant="destructive" className="w-full sm:w-auto">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out of All Devices
            </Button>
          </div>

          <div className="pt-4">
            <Button variant="destructive" className="w-full sm:w-auto">
              Delete Account
            </Button>
            <div className="text-xs text-muted-foreground pt-1">Permanently delete your account and all your data</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

