import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { Slide } from "@/type";
import { slideData } from "@/api/ApiRequest";

function MyCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [slides, setSlides] = useState<Slide[]>([]);

    // fetch slides
    useEffect(() => {
        const fetchSlidesData = async () => {
            try {
                const result = await slideData();

                setSlides(result.data.results);
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchSlidesData();
    }, []);

    // setup carousel api
    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="w-full">
            <Carousel setApi={setApi} className="w-4/5 mx-auto">
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide._id}>
                            <Card>
                                <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                                    <img
                                        src={slide.photo_url}
                                        alt={slide.description || "Slide"}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="text-muted-foreground py-2 text-center text-sm">
                Slide - {current}
            </div>
        </div>
    );
}

export default MyCarousel;
