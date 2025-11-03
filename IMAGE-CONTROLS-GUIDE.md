# Image Controls Guide

This guide explains how to control the zoom, position, and display of images in both the card (closed) and modal (open) states.

## Image Properties

Each `ProjectImage` object in `src/data/projects.ts` supports the following properties:

### Basic Properties
- **`src`** (required): The image source
- **`alt`** (required): Alt text for accessibility

### Display Control
- **`objectFit`**: How the image fills the container
  - `'cover'` - Image covers entire container (default for cards)
  - `'none'` - Image keeps natural size (default for modal)
  - `'contain'` - Image fits inside container
  - `'fill'` - Image stretches to fill
  - `'scale-down'` - Uses smallest of none or contain

- **`objectPosition`**: Where the image is anchored
  - Examples: `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top left'`, `'50% 50%'`

### Transform Control (New!)
- **`scale`**: Zoom multiplier (number)
  - `1` = 100% (no zoom)
  - `1.5` = 150% (zoomed in 50%)
  - `0.8` = 80% (zoomed out 20%)
  - `2` = 200% (doubled size)

- **`translateX`**: Horizontal offset (string with units)
  - Examples: `'10px'`, `'-20px'`, `'5%'`, `'-10%'`
  - Positive = move right, Negative = move left

- **`translateY`**: Vertical offset (string with units)
  - Examples: `'10px'`, `'-20px'`, `'5%'`, `'-10%'`
  - Positive = move down, Negative = move up

## Usage Examples

### Example 1: Basic Image (No Transform)
```typescript
{
  src: myImage,
  alt: "My Project Screenshot",
  objectFit: "cover",
  objectPosition: "center"
}
```

### Example 2: Zoomed In + Repositioned
```typescript
{
  src: myImage,
  alt: "My Project Screenshot",
  objectFit: "none",
  objectPosition: "center",
  scale: 1.5,          // Zoom in 50%
  translateX: "20px",  // Move right 20px
  translateY: "-10px"  // Move up 10px
}
```

### Example 3: Zoomed Out + Centered
```typescript
{
  src: myImage,
  alt: "My Project Screenshot",
  objectFit: "none",
  objectPosition: "center",
  scale: 0.8,          // Zoom out 20%
  translateX: "0",
  translateY: "0"
}
```

### Example 4: Focused on Top-Left Corner
```typescript
{
  src: myImage,
  alt: "My Project Screenshot",
  objectFit: "none",
  objectPosition: "top left",
  scale: 2,            // Double size
  translateX: "-15%",  // Move left 15%
  translateY: "0"
}
```

## Complete Project Example

```typescript
{
  id: "my-project",
  title: "My Project",
  year: "2024",
  categories: ["Design", "Development"],
  longDescription: "Project description...",
  images: {
    // Card images (shown on homepage in closed state)
    card: [
      {
        src: img1,
        alt: "Screenshot 1",
        objectFit: "cover",      // Fills card completely
        objectPosition: "center",
        scale: 1,                // No zoom
        translateX: "0",
        translateY: "0"
      },
      {
        src: img2,
        alt: "Screenshot 2",
        objectFit: "cover",
        objectPosition: "center",
        scale: 1.2,              // Slight zoom for emphasis
        translateX: "5px",
        translateY: "0"
      },
      {
        src: img3,
        alt: "Screenshot 3",
        objectFit: "cover",
        objectPosition: "top",   // Anchor to top
        scale: 1,
        translateX: "0",
        translateY: "0"
      }
    ],
    
    // Detail images (shown in modal in open state)
    detail: [
      {
        src: img1,
        alt: "Detailed View 1",
        objectFit: "none",        // Preserves natural size
        objectPosition: "center",
        scale: 1.5,               // Zoom in to show detail
        translateX: "0",
        translateY: "-5%"         // Move up slightly
      },
      {
        src: img2,
        alt: "Detailed View 2",
        objectFit: "none",
        objectPosition: "center",
        scale: 1.8,               // More zoom
        translateX: "10px",       // Pan right
        translateY: "0"
      },
      {
        src: img3,
        alt: "Detailed View 3",
        objectFit: "contain",     // Fit entire image
        objectPosition: "center",
        scale: 1,                 // No zoom with contain
        translateX: "0",
        translateY: "0"
      }
    ]
  }
}
```

## Best Practices

### For Card Images (Homepage)
- Use `objectFit: "cover"` to fill the card area completely
- Keep `scale` at `1` or subtle values like `1.1-1.2`
- Use `translateX/Y` sparingly to adjust framing
- All three card images are visible simultaneously in a stacked layout

### For Detail Images (Modal)
- Use `objectFit: "none"` to preserve natural zoom and cropping
- Use `scale` to control how much of the image is visible (higher = more zoom/crop)
- Use `translateX/Y` to pan and frame the important parts
- Use `objectPosition` as the anchor point before applying transforms
- Images are shown one per row in a vertical layout

### Transform Order
Transforms are applied in this order:
1. `objectPosition` - Sets the anchor point
2. `scale` - Zooms from the anchor
3. `translate` - Pans the zoomed image

### Tips
- Start with `objectPosition` to get the right anchor
- Then adjust `scale` to control zoom level
- Finally use `translate` for fine-tuning position
- Use percentage values for responsive positioning
- Use pixel values for precise positioning
- The container's `overflow: hidden` crops anything outside

## Quick Reference Table

| Property | Type | Default | Example Values |
|----------|------|---------|----------------|
| `objectFit` | string | `'cover'` (card) / `'none'` (modal) | `'cover'`, `'none'`, `'contain'` |
| `objectPosition` | string | `'center'` | `'top left'`, `'50% 75%'` |
| `scale` | number | `1` | `0.8`, `1`, `1.5`, `2` |
| `translateX` | string | `'0'` | `'10px'`, `'-5%'`, `'0'` |
| `translateY` | string | `'0'` | `'-20px'`, `'10%'`, `'0'` |
