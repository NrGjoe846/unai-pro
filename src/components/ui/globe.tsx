import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 1000,
  height: 1000,
  onRender: () => {},
  devicePixelRatio: 2.5,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 20000,
  mapBrightness: 8,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0, 119/255, 1],
  glowColor: [0, 119/255, 1],
  markers: [
    // Major tech hubs and AI research centers with larger markers
    { location: [37.7749, -122.4194], size: 0.12 }, // San Francisco
    { location: [40.7128, -74.0060], size: 0.12 }, // New York
    { location: [51.5074, -0.1278], size: 0.12 }, // London
    { location: [52.5200, 13.4050], size: 0.10 }, // Berlin
    { location: [35.6762, 139.6503], size: 0.11 }, // Tokyo
    { location: [31.2304, 121.4737], size: 0.11 }, // Shanghai
    { location: [-33.8688, 151.2093], size: 0.10 }, // Sydney
    { location: [48.8566, 2.3522], size: 0.10 }, // Paris
    { location: [1.3521, 103.8198], size: 0.09 }, // Singapore
    { location: [19.0760, 72.8777], size: 0.10 }, // Mumbai
    { location: [-23.5505, -46.6333], size: 0.10 }, // São Paulo
    { location: [55.7558, 37.6173], size: 0.09 }, // Moscow
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phi = useRef(0);
  const theta = useRef(0.3);
  const width = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [scale, setScale] = useState(1);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const autoRotationSpeed = 0.003; // Speed of auto-rotation
  const lastFrameTime = useRef(Date.now());

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    setIsDragging(value !== null);
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number, clientY: number) => {
    if (pointerInteracting.current !== null) {
      const deltaX = clientX - lastMousePosition.current.x;
      const deltaY = clientY - lastMousePosition.current.y;
      
      phi.current += deltaX * 0.005;
      theta.current = Math.max(
