import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import simplify from "simplify-js";

function convertGeoJSONTo3D(geojsonData, radius) {
  return geojsonData.features.flatMap((feature) => {
    const coordinates = feature.geometry.coordinates;
    const polygons = feature.geometry.type === "Polygon" ? [coordinates] : coordinates;

    return polygons.map((polygon) => {
      const linePoints = polygon[0].map(([lon, lat]) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        return new THREE.Vector3(x, y, z);
      });
      return linePoints;
    });
  });
}

function convertGeoJSONToDots(geojsonData, radius, density = 5) {
  // Extract points for each continent, adding them as dots instead of lines
  return geojsonData.features.flatMap((feature) => {
    const coordinates = feature.geometry.coordinates;
    const polygons = feature.geometry.type === "Polygon" ? [coordinates] : coordinates;

    return polygons.flatMap((polygon) =>
      polygon[0]
        .filter((_, index) => index % density === 0)
        .map(([lon, lat]) => {
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);

          const x = -radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.cos(phi);
          const z = radius * Math.sin(phi) * Math.sin(theta);

          return new THREE.Vector3(x, y, z);
        })
    );
  });
}

function convertGeoJSONTo3D2(geojsonData, radius, tolerance = 0.02, minLength = 10) {
  return geojsonData.features.flatMap((feature) => {
    const coordinates = feature.geometry.coordinates;
    const polygons = feature.geometry.type === "Polygon" ? [coordinates] : coordinates;

    return polygons
      .map((polygon) => {
        // Simplify the polygon to smooth out lines
        const points = polygon[0].map(([lon, lat]) => {
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);

          const x = -radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.cos(phi);
          const z = radius * Math.sin(phi) * Math.sin(theta);

          return { x, y, z };
        });

        // Apply smoothing with simplify-js
        const simplifiedPoints = simplify(points, tolerance, true);

        // Convert back to THREE.Vector3 and filter out small islands
        const linePoints = simplifiedPoints.map(({ x, y, z }) => new THREE.Vector3(x, y, z));

        // Only return the line if it meets the minimum length
        return linePoints.length > minLength ? linePoints : null;
      })
      .filter((line) => line !== null); // Remove nulls (filtered-out islands)
  });
}

function ContinentLines({ geojson, radius }) {
  const continentLines = useMemo(() => convertGeoJSONTo3D(geojson, radius), [geojson, radius]);

  return (
    <>
      {continentLines.map((linePoints, index) => (
        <Line
          key={index}
          points={linePoints}
          color="white"
          lineWidth={1}
          transparent
          opacity={0.8}
        />
      ))}
    </>
  );
}

function ContinentDots({ geojson, radius }) {
  const dotPositions = useMemo(() => convertGeoJSONToDots(geojson, radius), [geojson, radius]);

  return (
    <>
      {dotPositions.map((position, index) => (
        <mesh
          key={index}
          position={position}
        >
          <sphereGeometry args={[0.02, 8, 8]} /> {/* Adjust size as needed */}
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </>
  );
}

function RotatingSphere({ radius }) {
  const sphereRef = useRef();

//   useFrame(() => {
//     if (sphereRef.current) {
//       sphereRef.current.rotation.y += 0.005;
//     }
//   });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[radius - 0.1, 64, 64]} />
      <meshBasicMaterial
        color="white"
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

export default function Globe({ geojsonData }) {
  const radius = 5;

  const globeGroup = useRef();

//   useFrame(() => {
//     if (globeGroup.current) {
//       globeGroup.current.rotation.y += 0.002; // Slow rotation for the entire globe
//     }
//   });

  return (
    <group ref={globeGroup}>
      {/* Transparent rotating sphere */}
      <RotatingSphere radius={radius} />

      {/* Continent lines */}
      <ContinentLines
        geojson={geojsonData}
        radius={radius}
      />
      {/* Continent dots */}
      
      {/* <ContinentDots
        geojson={geojsonData}
        radius={radius}
      /> */}
    </group>
  );
}
