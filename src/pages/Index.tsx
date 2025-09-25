import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import PatientPortal from '@/components/PatientPortal';
import PatientDashboard from '@/components/PatientDashboard';
import Footer from '@/components/Footer';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SignedOut>
        <Header />
        <Hero />
        <Features />
        <Dashboard />
        <PatientPortal />
        <Footer />
      </SignedOut>
      <SignedIn>
        <PatientDashboard />
      </SignedIn>
    </div>
  );
};

export default Index;
