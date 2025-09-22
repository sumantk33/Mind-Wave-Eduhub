// Main entry point for Vite
import {
  createIcons,
  Moon,
  GraduationCap,
  Menu,
  ArrowRight,
  CodeXml,
  Star,
  Clock,
  Users,
  ChartLine,
  TabletSmartphone,
  ChevronDown,
  Terminal,
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sun,
  X,
} from "lucide";

import "./styles/main.css";
import "./utils/theme-toggle.js";
import "./utils/on-load.js";

createIcons({
  icons: {
    Moon,
    GraduationCap,
    Menu,
    ArrowRight,
    CodeXml,
    Star,
    Clock,
    Users,
    ChartLine,
    TabletSmartphone,
    ChevronDown,
    Terminal,
    Phone,
    Mail,
    MapPin,
    Send,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Sun,
    X,
  },
});
