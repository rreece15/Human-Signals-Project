import gpxpy
import gpxpy.gpx
import csv
import sys
import os

def gpx_to_csv(gpx_file, csv_file):
    with open(gpx_file, 'r', encoding='utf-8') as gpx_file:
        gpx = gpxpy.parse(gpx_file)

        with open(csv_file, 'w', newline='', encoding='utf-8') as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow(["Latitude", "Longitude", "Elevation", "Time", "Cadence", "Heart Rate"])

            for track in gpx.tracks:
                for segment in track.segments:
                    for point in segment.points:
                        # Default values
                        cadence = None
                        heart_rate = None
                        
                        # Check for extensions in the Garmin namespace
                        for extension in point.extensions:
                            for child in extension:
                                if child.tag.endswith("hr"):
                                    heart_rate = child.text
                                elif child.tag.endswith("cad"):
                                    cadence = child.text

                        writer.writerow([
                            point.latitude, 
                            point.longitude, 
                            point.elevation, 
                            point.time, 
                            cadence if cadence is not None else "N/A", 
                            heart_rate if heart_rate is not None else "N/A"
                        ])

def process_folder(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for file_name in os.listdir(input_folder):
        if file_name.lower().endswith(".gpx"):
            input_path = os.path.join(input_folder, file_name)
            output_file_name = os.path.splitext(file_name)[0] + ".csv"  # Ensuring proper filename handling
            output_path = os.path.join(output_folder, output_file_name)
            print(f"Processing {file_name} -> {output_file_name}")
            try:
                gpx_to_csv(input_path, output_path)
            except Exception as e:
                print(f"Error processing {file_name}: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python gpx_to_csv.py input_folder output_folder")
        sys.exit(1)
    
    process_folder(sys.argv[1], sys.argv[2])
