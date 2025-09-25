import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  Bell, 
  Activity, 
  Clock, 
  Heart,
  MessageSquare,
  Star,
  CheckCircle,
  AlertCircle,
  Plus,
  Settings
} from 'lucide-react';

const PatientDashboard = ({ onBackToHome }: { onBackToHome: () => void }) => {
  const upcomingSessions = [
    { 
      id: 1,
      therapy: "Abhyanga (Full Body Oil Massage)", 
      date: "Today", 
      time: "10:00 AM", 
      status: "confirmed",
      practitioner: "Dr. Priya Sharma",
      duration: "90 minutes",
      preparation: "Fast for 2 hours before session. Wear comfortable clothes."
    },
    { 
      id: 2,
      therapy: "Shirodhara", 
      date: "Tomorrow", 
      time: "11:30 AM", 
      status: "confirmed",
      practitioner: "Dr. Rajesh Kumar",
      duration: "60 minutes",
      preparation: "Avoid heavy meals 3 hours prior. Come with clean hair."
    },
    { 
      id: 3,
      therapy: "Swedana (Steam Therapy)", 
      date: "Oct 28", 
      time: "2:00 PM", 
      status: "scheduled",
      practitioner: "Dr. Priya Sharma",
      duration: "45 minutes",
      preparation: "Stay well hydrated. Bring a towel."
    }
  ];

  const recentNotifications = [
    { 
      id: 1,
      message: "Reminder: Your Abhyanga session is in 2 hours. Please prepare by fasting.", 
      time: "2 hours ago",
      type: "reminder",
      urgent: true
    },
    { 
      id: 2,
      message: "Post-session care: Rest for 30 minutes after your last therapy session", 
      time: "1 day ago",
      type: "aftercare",
      urgent: false
    },
    { 
      id: 3,
      message: "Great progress! Your therapy completion rate is now 85%", 
      time: "2 days ago",
      type: "progress",
      urgent: false
    },
    { 
      id: 4,
      message: "New personalized recommendation: Increase water intake to 3L daily", 
      time: "3 days ago",
      type: "recommendation",
      urgent: false
    }
  ];

  const progressData = {
    overallProgress: 78,
    sessionsCompleted: 12,
    totalSessions: 15,
    energyLevels: 85,
    sleepQuality: 92,
    stressReduction: 78,
    painReduction: 70
  };

  return (
    <div className="min-h-screen bg-gradient-healing">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-primary" />
                <h1 className="text-xl font-bold text-foreground">My Panchakarma Journey</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs">3</Badge>
              </Button>
              <Button variant="outline" size="sm" onClick={onBackToHome}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="" alt="Patient" />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">JS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Welcome back, John!</h2>
              <p className="text-muted-foreground">Your next session is today at 10:00 AM</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Session Highlight */}
            <Card className="border-primary bg-gradient-to-r from-primary/5 to-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Today's Session
                  </CardTitle>
                  <Badge className="bg-primary">Starting Soon</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{upcomingSessions[0].therapy}</h3>
                    <p className="text-muted-foreground">with {upcomingSessions[0].practitioner}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {upcomingSessions[0].time}
                    </span>
                    <span>•</span>
                    <span>{upcomingSessions[0].duration}</span>
                  </div>
                  <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-warning-foreground">Preparation Required</p>
                        <p className="text-sm text-muted-foreground">{upcomingSessions[0].preparation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button className="bg-gradient-primary">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark as Ready
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact Practitioner
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>Your scheduled therapy sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.slice(1).map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{session.therapy}</h4>
                        <p className="text-sm text-muted-foreground">{session.date} at {session.time}</p>
                        <p className="text-sm text-muted-foreground">with {session.practitioner}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                          {session.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{session.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Request New Session
                </Button>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  My Progress
                </CardTitle>
                <CardDescription>Track your healing journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{progressData.overallProgress}%</div>
                    <div className="text-sm text-muted-foreground">Overall Progress</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {progressData.sessionsCompleted}/{progressData.totalSessions}
                    </div>
                    <div className="text-sm text-muted-foreground">Sessions Completed</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Energy Levels</span>
                      <span className="text-muted-foreground">{progressData.energyLevels}%</span>
                    </div>
                    <Progress value={progressData.energyLevels} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Sleep Quality</span>
                      <span className="text-muted-foreground">{progressData.sleepQuality}%</span>
                    </div>
                    <Progress value={progressData.sleepQuality} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Stress Reduction</span>
                      <span className="text-muted-foreground">{progressData.stressReduction}%</span>
                    </div>
                    <Progress value={progressData.stressReduction} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Pain Reduction</span>
                      <span className="text-muted-foreground">{progressData.painReduction}%</span>
                    </div>
                    <Progress value={progressData.painReduction} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-primary" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'progress' ? 'bg-success' : 
                        notification.type === 'reminder' ? 'bg-warning' :
                        notification.type === 'aftercare' ? 'bg-info' : 'bg-primary'
                      }`} />
                      <div className="flex-1">
                        <p className={`text-sm ${notification.urgent ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Feedback
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Reschedule Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  View Full Progress
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Notification Settings
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  If you experience any adverse reactions, contact us immediately.
                </p>
                <Button variant="destructive" className="w-full">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;