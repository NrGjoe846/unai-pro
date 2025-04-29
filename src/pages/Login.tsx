import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/lib/firebase";

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
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

// Form schema
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const { user, error } = await signIn(values.email, values.password);
      
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Login successful",
        description: "Welcome back to UNAI TECH!",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-unai-black bg-opacity-95 p-6">
      <div className="relative w-full max-w-md">
        {/* Background effects */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-unai-blue/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        {/* Card container */}
        <div className="relative glass-panel p-8 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold gradient-text mb-2">Welcome Back</h1>
            <p className="text-white/60">Sign in to your UNAI TECH account</p>
          </div>
          
          {/* Login Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
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
              
              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 bg-white/5 border-white/10 text-white"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-white/40 hover:text-white/60"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-unai-blue"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="text-sm text-white/60 cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                  )}
                />
                <Link to="/forgot-password" className="text-sm text-unai-blue hover:text-unai-blue/80 hover:underline">
                  Forgot password?
                </Link>
              </div>
              
              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-unai-blue hover:bg-unai-blue/90 text-white"
              >
                Sign In
              </Button>
              
              {/* Sign Up Link */}
              <div className="text-center mt-4">
                <p className="text-white/60 text-sm">
                  Don't have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="text-unai-blue hover:text-unai-blue/80 hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
