
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Mail, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

// Form schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    // In a real app, you'd send a password reset email
    console.log("Password reset requested for:", values.email);
    
    // Show toast notification
    toast({
      title: "Reset link sent",
      description: "Check your email for password reset instructions",
    });
    
    // Show success message
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-unai-black bg-opacity-95 p-6">
      <div className="relative w-full max-w-md">
        {/* Background effects */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-unai-blue/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        {/* Card container */}
        <div className="relative glass-panel p-8 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-10">
          {/* Back button */}
          <Link 
            to="/login" 
            className="inline-flex items-center text-white/60 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="h-16 w-16 bg-unai-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-unai-blue" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Check your email</h2>
              <p className="text-white/60 mb-6">
                We've sent password reset instructions to your email address. Please check your inbox.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                variant="outline" 
                className="border-white/10 hover:bg-white/5 text-white"
              >
                Send again
              </Button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold gradient-text mb-2">Forgot Password</h1>
                <p className="text-white/60">Enter your email to reset your password</p>
              </div>
              
              {/* Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                            <Input
                              placeholder="your.email@example.com"
                              className="pl-10 bg-white/5 border-white/10 text-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-unai-blue hover:bg-unai-blue/90 text-white"
                  >
                    Send Reset Instructions
                  </Button>
                </form>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
