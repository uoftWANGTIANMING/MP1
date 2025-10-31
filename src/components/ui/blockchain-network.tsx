'use client'

import { useEffect, useRef } from 'react'

interface Node {
  id: string
  name: string
  color: string
  x: number
  y: number
  vx: number
  vy: number
}

interface Link {
  source: Node
  target: Node
}

const blockchainNodes = [
  { id: 'bitcoin', name: 'BTC', color: '#F7931A' },
  { id: 'ethereum', name: 'ETH', color: '#627EEA' },
  { id: 'solana', name: 'SOL', color: '#14F195' },
  { id: 'polygon', name: 'MATIC', color: '#8247E5' },
  { id: 'avalanche', name: 'AVAX', color: '#E84142' },
  { id: 'arbitrum', name: 'ARB', color: '#28A0F0' },
  { id: 'bsc', name: 'BNB', color: '#F3BA2F' },
  { id: 'optimism', name: 'OP', color: '#FF0420' },
  { id: 'base', name: 'BASE', color: '#0052FF' },
  { id: 'cosmos', name: 'ATOM', color: '#2E3148' },
  { id: 'polkadot', name: 'DOT', color: '#E6007A' },
  { id: 'cardano', name: 'ADA', color: '#0033AD' },
]

export default function BlockchainNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 400
    let height = 600 // Larger default height for desktop
    let centerX = width / 2
    let centerY = height / 2
    // Calculate safe radius: ensure circle + node size + label fits within canvas
    // Node radius: 7, glow: 14, label offset: 22, so we need padding ~35
    let maxRadius = 0

    const resizeCanvas = () => {
      if (!container) return
      const rect = container.getBoundingClientRect()
      width = rect.width || 400
      // Use container height if available, otherwise use calculated height based on width
      // For desktop (md and up), aim for a square-ish or slightly taller aspect ratio
      // For mobile, use smaller height
      const preferredHeight = width > 500 ? width * 0.8 : width * 0.6
      height = rect.height || preferredHeight || 500
      
      // Ensure minimum height for proper display, add extra space for labels at bottom
      height = Math.max(height, 400) + 40 // Add 40px padding for labels
      
      canvas.width = width
      canvas.height = height
      
      // Recalculate center - slightly below center for better visual balance
      centerX = width / 2
      // Move center down by a percentage of height, but less to prevent bottom clipping
      centerY = height / 2 + height * 0.05 // Reduced from 0.1 to 0.05 to prevent bottom clipping
      
      // Calculate maximum safe radius to prevent clipping
      // Further increased padding and radius for much larger boundary
      // Add extra padding at bottom for labels (label offset is 22px, add margin)
      const paddingTop = 25
      const paddingBottom = 50 // More padding at bottom for labels
      const padding = Math.min(paddingTop, paddingBottom)
      // Distance from center to edges
      const distToTop = centerY
      const distToBottom = height - centerY - 25 // Reserve space for labels at bottom
      const distToLeft = centerX
      const distToRight = width - centerX
      // Calculate minimum distance to edge, giving more weight to bottom
      const minDistance = Math.min(distToTop, distToBottom, distToLeft, distToRight)
      // Increase radius multiplier significantly to make boundary much larger
      const safeRadius = minDistance - padding
      maxRadius = safeRadius * 1.5 // Increased from 1.3 to 1.5 for much larger boundary
      // Ensure minimum radius for visibility  
      maxRadius = Math.max(maxRadius, Math.min(width, height) * 0.6)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Get initial radius from calculated maxRadius
    let radius = maxRadius

      // Initialize nodes with positions within circular boundary
    const nodes: Node[] = blockchainNodes.map((node) => {
      // Generate random position within circle
      let angle = Math.random() * Math.PI * 2
      let distance = Math.random() * radius * 0.9 // Increased to 0.9 to use even more space
      return {
        ...node,
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
      }
    })

    // Create links between nodes (neural network style)
    const links: Link[] = []
    for (let i = 0; i < nodes.length; i++) {
      // Connect to next 2 nodes to form a network
      const connections = Math.min(2, nodes.length - i - 1)
      for (let j = 1; j <= connections; j++) {
        const targetIndex = (i + j) % nodes.length
        links.push({ source: nodes[i], target: nodes[targetIndex] })
      }
    }

    function animate() {
      if (!ctx || !canvas) return

      // Update radius from current maxRadius (in case of resize)
      radius = maxRadius

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions (constrained to circular boundary)
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Calculate distance from center
        const dx = node.x - centerX
        const dy = node.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // If node goes outside circle, bounce it back
        // Use smaller margin (10) to allow nodes to use even more space
        const maxDistance = radius - 10
        if (distance > maxDistance) {
          // Normalize direction vector
          const nx = dx / distance
          const ny = dy / distance

          // Place node just inside the boundary
          node.x = centerX + nx * maxDistance
          node.y = centerY + ny * maxDistance

          // Reflect velocity off the boundary
          const dot = node.vx * nx + node.vy * ny
          node.vx -= 2 * dot * nx
          node.vy -= 2 * dot * ny
        }
      })

      // Draw links (neural network connections)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
      ctx.lineWidth = 1
      links.forEach((link) => {
        const dx = link.target.x - link.source.x
        const dy = link.target.y - link.source.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Only draw if nodes are close enough (within circle)
        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(link.source.x, link.source.y)
          ctx.lineTo(link.target.x, link.target.y)
          ctx.stroke()
        }
      })

      // Draw nodes (blockchain nodes) - bigger
      nodes.forEach((node) => {
        // Outer glow (bigger)
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          14
        )
        gradient.addColorStop(0, node.color)
        gradient.addColorStop(0.7, node.color + '80')
        gradient.addColorStop(1, node.color + '00')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 14, 0, Math.PI * 2)
        ctx.fill()

        // Node circle (bigger)
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, 7, 0, Math.PI * 2)
        ctx.fill()

        // Node label (bigger font)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.font = 'bold 11px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(node.name, node.x, node.y + 22)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
}

